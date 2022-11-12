import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApisInfo } from 'src/app/config/apis-info';
import { PartyModel } from 'src/app/models/party.model';
import { PartyService } from 'src/app/services/parameters/party.service';

@Component({
  selector: 'app-edit-party',
  templateUrl: './edit-party.component.html',
  styleUrls: ['./edit-party.component.css']
})
export class EditPartyComponent implements OnInit {
  urlServer: string = ApisInfo.LOGIC_MS_URL;
  uploadedImage: string = '';
  isFileSelected: boolean = false;

  fGroup: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private partyService: PartyService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.BuildingForm();
    this.SearchRecord();
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


  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    this.partyService.getRecordById(id).subscribe({
      next: (data) => {
        
        this.fGroup.controls["id"].setValue(data.id);
        this.fGroup.controls["name"].setValue(data.nombre);
        this.uploadedImage = data.logo;
      },
      error: (err) => {
alert("Error obteniendo el registro")
      }
    })
  }

  EditRecord() {
    if (this.fGroup.invalid) {
      alert("Faltan datos");
    } else {
      let model = new PartyModel();
      model.logo = this.uploadedImage;
      model.nombre = this.fGroup.controls["name"].value;
      model.id = this.fGroup.controls["id"].value;
      this.partyService.editRecord(model).subscribe({
        next: (data) => {
          alert("Registro almacenado correctamente.");
          this.router.navigate(["/parameters/list-parties"]);
        },
        error: (err) => {

        }
      });
    }
  }

}
