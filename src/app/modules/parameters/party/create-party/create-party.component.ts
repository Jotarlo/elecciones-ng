import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApisInfo } from 'src/app/config/apis-info';
import { PartyModel } from 'src/app/models/party.model';
import { PartyService } from 'src/app/services/parameters/party.service';

@Component({
  selector: 'app-create-party',
  templateUrl: './create-party.component.html',
  styleUrls: ['./create-party.component.css']
})
export class CreatePartyComponent implements OnInit {
  urlServer: string = ApisInfo.LOGIC_MS_URL;
  uploadedImage: string = '';
  isFileSelected: boolean = false;

  fGroup: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private partyService: PartyService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.BuildingForm();
  }

  BuildingForm() {
    this.fGroup = this.fb.group({
      id: ['', []],
      name: ['', [Validators.required]],
      file: ['', [Validators.required]]
    });
  }

  get fg() {
    return this.fGroup.controls;
  }

  /**
   * Se obtiene el archivo seleccionado del input file
   * @param evt evento de selección
   */
  onFileSelect(evt: any) {
    if (evt.target.files.length > 0) {
      const f = evt.target.files[0];
      this.fGroup.controls["file"].setValue(f);
      this.isFileSelected = true;
    }
  }

  UploadImage() {
    const formData = new FormData();
    formData.append('file', this.fGroup.controls["file"].value);
    this.partyService.uploadImage(formData).subscribe({
      next: (data) => {
        this.uploadedImage = data.file;
        alert("Imagen cargada");
      },
      error: (err) => {

      }
    });
  }

  SaveRecord() {
    if(this.fGroup.invalid){
      alert("Faltan datos");
    }else{
      let model = new PartyModel();
      model.logo = this.uploadedImage;
      model.nombre = this.fGroup.controls["name"].value;
      this.partyService.saveRecord(model).subscribe({
        next:(data)=>{
          alert("Registro almacenado correctamente.");
          this.router.navigate(["/parameters/list-parties"]);
        },
        error:(err)=>{

        }
      });
    }
  }

}
