import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import User from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
    
   }
   private url='api/user'
  getCurrentUser() : Observable<User>{
    return this.http.get<User>(this.url+'/1')
  }
  editCurrentUser(user: User){
    return this.http.put(this.url+'/1',user)
  }
}