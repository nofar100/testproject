import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from '../models/expense';

@Injectable({
  providedIn: 'root'
})


export class ExpenseService {

  private expenseUrl='api/expenses'
  deleteExpense(expense: Expense) {
    return this.http.delete<Expense>(this.expenseUrl+'/'+expense.id)
  }


  constructor(private http: HttpClient) {

   }

   addNewExpense(expense: Expense): Observable<Expense>{
     let httpOption = {
       headers: new HttpHeaders({'Content-Type': 'application/json'})
     }
     return this.http.post<Expense>(this.expenseUrl,expense,httpOption)
   }
   getAllExpenses():Observable<Expense[]>{
     return this.http.get<Expense[]>(this.expenseUrl)
   }
}
