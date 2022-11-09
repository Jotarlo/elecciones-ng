import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { LoggedUserModel } from '../models/logged-user.model';
import { UserModel } from '../models/user.model';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(private secService: SecurityService) { 
    
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

  /*
  GetUserData(): UserModel | null{
    let userAsString = localStorage.getItem("user-data");
    if(userAsString){
      let userData: LoggedUserModel =  JSON.parse(userAsString);
      return userData.user;
    }
    return null;
  }*/

}
