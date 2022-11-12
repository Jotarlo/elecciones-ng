import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { LoggedUserModel } from '../models/logged-user.model';
import { UserModel } from '../models/user.model';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(
    private secService: SecurityService,
  ) {

  }

  SaveUserData(data: LoggedUserModel): boolean {
    let jsonAsString = JSON.stringify(data);
    if (!localStorage.getItem("user-data")) {
      localStorage.setItem("user-data", jsonAsString);
      this.secService.UpdateUserBehavior(data.user);
      return true;
    } else {
      return false;
    }
  }

  RemoveUserData() {
    localStorage.removeItem("user-data");
    let userData = new UserModel();
    this.secService.UpdateUserBehavior(userData);
  }
  
  GetSessionData(): LoggedUserModel | null{
    let userAsString = localStorage.getItem("user-data");
    if(userAsString){
      return JSON.parse(userAsString);
    }
    return null;
  }

  GetRolId():string{
    let userAsString = localStorage.getItem("user-data");
    if(userAsString){
      return JSON.parse(userAsString).user.role;
    }
    return "";
  }

  GetSessionToken():string{
    let userAsString = localStorage.getItem("user-data");
    if(userAsString){
      return JSON.parse(userAsString).token;
      ;
    }
    return "";
  }

}
