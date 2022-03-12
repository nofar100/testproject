import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import User from 'src/app/models/user';
import { ExpenseService } from 'src/app/services/expense.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  currentName!: string;
  currentBalance!: number;
  currentDayOfTracking!: number;
  displayList: boolean;
  totalExpenses!: number;

  constructor(private userService: UserService,private router: Router,private expenseService: ExpenseService) { 
    this.totalExpenses=0;
    this.displayList=false;
  }

  ngOnInit(): void {
    this.getCurrentUser();
    this.updateTotalExpenses();
    this.removeExpensesToDate();
  }
  removeExpensesToDate() {
    const date = new Date();
    var currentDay = date.getDate();
    var chekcHour = date.getHours();
    var checkMinutes = date.getMinutes();
    if (
      this.currentDayOfTracking == currentDay &&
      chekcHour == 0 &&
      checkMinutes == 0
    )
      this.emptyExpenses();
  }
  emptyExpenses() {
    this.expenseService.getAllExpenses().subscribe((result)=>{
     result.forEach(expense => {
       this.expenseService.deleteExpense(expense);
     });
    })
  }
  updateTotalExpenses() {
    this.expenseService.getAllExpenses().subscribe((result)=>{
      result.forEach(expense => {
        this.totalExpenses+=expense.amount;
      });
      this.currentBalance-=this.totalExpenses
    })
  }
  getCurrentUser() {
    this.userService.getCurrentUser().subscribe((result)=>{
      this.currentName=result.name;
      this.currentBalance=result.balance;
      this.currentDayOfTracking=result.dayoftracking;
    }
    )
  }
  updateuser(event:User){
    event = this.validateAndFill(event)
   this.userService.editCurrentUser(event).subscribe((result)=>{
     this.getCurrentUser()
   }) 
  }
  validateAndFill(event: User): User {
    if(!event.name) {
        event.name=this.currentName;
    }
    if(!event.balance){
        event.balance=this.currentBalance;
    }
    if(!event.dayoftracking || event.dayoftracking<=0 || event.dayoftracking>31){
        event.dayoftracking=this.currentDayOfTracking;
    }
    return event;
  }

  detailsclick(){
    this.displayList=!this.displayList
  }

  toAdd(){
    this.router.navigate(['new-expense'])
  }

}
