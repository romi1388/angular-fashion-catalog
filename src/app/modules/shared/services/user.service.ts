import { Injectable } from '@angular/core';
import {User} from "../../login/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser:User;
  constructor() { }
  login(user:string, psw: string) : void {
    if(user || !psw) {
      alert("please enter credentials!")
      return;
    }
    if(user === 'admin') {
     this.currentUser = {id:1, user, isAdmin:true};
      return;
    }
    this.currentUser = {id:2, user, isAdmin:false}
  }

}
