import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/models/expense';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.scss']
})
export class ExpensesListComponent implements OnInit {

  list! : Expense[]
  constructor(private expenseService: ExpenseService) {

   }

  ngOnInit(): void {
    this.initList();
  }
  initList() {
    this.expenseService.getAllExpenses().subscribe((result)=>{
      this.list=result;
    })
  }

}
