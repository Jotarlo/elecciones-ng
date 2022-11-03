import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DefaultValues } from 'src/app/config/default-values';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  fGroup: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private secService: SecurityService
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
    });
  }

  /**
   * Ejecución de la funcionalidad del botón reset
   */
  ResetPasswordAction() {
    let username = this.fGroup.controls["username"].value;
    this.secService.ResetPasswordRequest(username).subscribe({
      next:(data) => {
        if(data){
          alert("Se ha cambiado la contraseña, por favor verifique su bandeja de entrada.");
        }else{
          alert("No se ha enviado la contraseña");
        }
      },
      error: (err) => {
          alert("Se ha presentado un fallo recuperando la contraseña.")
      }
    }
    );
  }

}
