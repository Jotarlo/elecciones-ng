import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApisInfo } from 'src/app/config/apis-info';
import { PartyModel } from 'src/app/models/party.model';
import { UploadedFileModel } from 'src/app/models/uploaded.file.model';
import { LocalStorageService } from '../local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class PartyService {

  baseUrl: string = ApisInfo.LOGIC_MS_URL;
  actionName = 'movimientos'
  url: string = `${this.baseUrl}/${this.actionName}`;
  jwt: string = '';
  constructor(
    private http: HttpClient,
    private lsService: LocalStorageService
  ) {

    this.jwt = lsService.GetSessionToken();

  }

  /**
   * Obtiene la lista de movimientos o partidos
   * @returns lista de partidos en estructura JSON
   */
  getRecordList(): Observable<PartyModel[]> {
    return this.http.get<PartyModel[]>(this.url);
  }

  getRecordById(id:number): Observable<PartyModel> {
    return this.http.get<PartyModel>(this.url+"/"+id, {
      headers:new HttpHeaders({
        "Authorization":"Bearer "+ this.jwt
      })
    });
  }


  /**
   * Crea un nuevo registro
   * @param record datos del nuevo registro
   * @returns registro insertado
   */
  saveRecord(record: PartyModel): Observable<PartyModel> {
    return this.http.post<PartyModel>(this.url, {
      nombre: record.nombre,
      logo: record.logo
    }, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.jwt}`
      })
    });
  }

  /**
   * Actualiza un registro
   * @param record registro a actualizar
   * @returns NA
   */
  editRecord(record: PartyModel) {
    return this.http.put(this.url + "/" + record.id, record, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.jwt}`
      })
    });
  }

  /**
   * Elimina un registro
   * @param id id del registro a eliminar
   * @returns NA
   */
  removeRecord(id: number) {
    return this.http.delete(this.url + "/" + id, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.jwt}`
      })
    });
  }


  uploadImage(formData: FormData): Observable<UploadedFileModel> {
    let actionName: string = "cargar-archivo-movimiento";
    return this.http.post<UploadedFileModel>(`${this.baseUrl}/${actionName}`, formData, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.jwt}`
      })
    });
  }

}
