import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DefaultValues } from 'src/app/config/default-values';
import { LoggedUserModel } from 'src/app/models/logged-user.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { SecurityService } from 'src/app/services/security.service';

var MD5 = require("crypto-js/md5");

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  fGroup: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private secService: SecurityService,
    private router: Router,
    private lsService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.BuildingForm();
    /*setTimeout(() => {
      this.fGroup.controls["username"].setValue("Hola Mundo");
    }, 5000);*/
  }


  /**
   * Construcción del formulario con los campos del mismo
   */
  BuildingForm() {
    this.fGroup = this.fb.group({
      username: [DefaultValues.email, [Validators.required, Validators.email, Validators.minLength(5)]],
      password: [DefaultValues.password, [Validators.required]],
    });
  }

  /**
   * Ejecución de la funcionalidad del botón reset
   */
  LoginAction() {
    let username = this.fGroup.controls["username"].value;
    let password = this.fGroup.controls["password"].value;
    let cryptoPassword = MD5(password).toString();
    console.log(cryptoPassword);
    this.secService.LoginRequest(username, cryptoPassword).subscribe({
      next: (data: LoggedUserModel) => {
        // cuando se ha obtenido una respuesta válida
        if (data.token == "") {
          alert("Datos inválidos");
        } else {
          console.log(data);
          data.user.isLogged = true;
          this.lsService.SaveUserData(data);
          this.router.navigate(["/home"]);
          // localstorage
          // mostrar un menú y ocultar el item de login
        }
      },
      error: (err) => {
        alert("Se ha presentado un fallo recuperando la contraseña.")
      }
    }
    );
  }

  get fg() {
    return this.fGroup.controls;
  }

}
