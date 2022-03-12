import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { Expense } from 'src/app/models/expense';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {

  storeName!: string
  amount!: number
  message!: string;
  cancelPopUp: boolean;

  constructor(private expenseService: ExpenseService,private router: Router) {
      this.cancelPopUp=false;
   }

  ngOnInit(): void {
  }
  addExpense(){
    this.message=""
    if(this.validateForm()){
      const newExpense= {} as Expense;
      newExpense.storeName=this.storeName
      newExpense.amount=this.amount
      newExpense.id=Guid.create()
      var date=new Date()
      newExpense.dayoftracking=date.getDate()
      this.expenseService.addNewExpense(newExpense).subscribe((result)=>{
       this.reset()
       this.message='Added Successfully'
      })
    }

  }
  validateForm() {
    let answer = true;
    if(!this.storeName ){
      this.message="Enter Store Name"
      answer = false;
    }
    else if(!this.amount){
      this.message="Enter Amount"
      answer=false
    }
    return answer
  }
  resetMessage(){
    this.message=""
  }

  reset(){
    this.amount=Number(undefined)
      this.storeName=""
  }
  return(){
    this.router.navigate(['main-page'])
  }

  PerformedAnswer(event: boolean){
    if(event) this.reset()
    this.cancelPopup()
    
  }
  cancelPopup(){
    this.cancelPopUp=!this.cancelPopUp
  }
}
