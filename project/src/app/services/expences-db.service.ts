import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Expense } from '../models/expense';
import User from '../models/user';
import { userArray } from '../RowData/user';

@Injectable({
  providedIn: 'root'
})
export class ExpencesDBService implements InMemoryDbService{

  createDb() {
    const user= userArray
    const expenses: Expense[]=[];
    return {user, expenses}
  }

  constructor() { }
}
