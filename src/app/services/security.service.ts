import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApisInfo } from '../config/apis-info';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  url: string = ApisInfo.SEC_MS_URL;

  constructor(
    private http:HttpClient
  ) { }

  ResetPasswordRequest(username: string):Observable<boolean> {
    let actionName = 'recuperar-clave';
    return this.http.post<boolean>(`${this.url}/${actionName}`, {
      correo: username
    });
  }


}
