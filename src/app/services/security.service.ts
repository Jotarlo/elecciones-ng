import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApisInfo } from '../config/apis-info';
import { LoggedUserModel } from '../models/logged-user.model';
import { UserModel } from '../models/user.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  userData = new BehaviorSubject<UserModel>(new UserModel());
  url: string = ApisInfo.SEC_MS_URL;

  constructor(
    private http: HttpClient,
  ) { 

    this.sessionValidation();
  }

  /**
   * Se verifica la existencia de una sesión activa anteriormente
   */
  sessionValidation() {
    let userAsString = localStorage.getItem("user-data");
    if(userAsString){
      let userData: LoggedUserModel =  JSON.parse(userAsString);
      this.UpdateUserBehavior(userData.user);
    }
  }

  /**
   * Actualiza los datos del nuevo usuario logueado
   * @param data nueva información
   * @returns el estado del user data
   */
  UpdateUserBehavior(data: UserModel) {
    return this.userData.next(data);
  }

  /**
   * Retorna la información del usuario que esté en sesión
   * @returns la info del user logueado
   */
  getUserData() {
    return this.userData.asObservable();
  }

  ResetPasswordRequest(username: string): Observable<boolean> {
    let actionName = 'recuperar-clave';
    return this.http.post<boolean>(`${this.url}/${actionName}`, {
      correo: username
    });
  }

  LoginRequest(username: string, password: string): Observable<LoggedUserModel> {
    let actionName = 'login';
    return this.http.post<LoggedUserModel>(`${this.url}/${actionName}`, {
      nombreUsuario: username,
      clave: password
    });
  }


}
