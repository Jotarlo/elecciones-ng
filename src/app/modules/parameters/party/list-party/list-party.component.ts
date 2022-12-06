import { Component, OnInit } from '@angular/core';
import { ApisInfo } from 'src/app/config/apis-info';
import { PartyModel } from 'src/app/models/party.model';
import { PartyService } from 'src/app/services/parameters/party.service';

declare const OpenConfirmModal: any;
declare const OpenAddModal: any;

@Component({
  selector: 'app-list-party',
  templateUrl: './list-party.component.html',
  styleUrls: ['./list-party.component.css']
})
export class ListPartyComponent implements OnInit {
  page: number = 1;
  idToRemove: number = -1;
  urlServer = ApisInfo.LOGIC_MS_URL;
  recordList: PartyModel[] = [];

  constructor(
    private partyService: PartyService
  ) { }

  ngOnInit(): void {
    this.ListRecords();
  }

  ListRecords() {

    this.partyService.getRecordList().subscribe({
      next: (data) => {
        this.recordList = data;
      },
      error: (err) => {
        alert("Error obteniendo la información")
      }
    });
  }

  ShowRemoveWindow(id: number) {
    OpenConfirmModal("Confirma la eliminación?")
    this.idToRemove = id;
  }

  /**
   * 
   * @param id 
   */
  RemoveRecord() {
    this.partyService.removeRecord(this.idToRemove).subscribe({
      next: (data) => {
        //this.ListRecords();
        this.recordList = this.recordList.filter(x => x.id != this.idToRemove);
        alert("Eliminado");
      },
      error: (err) => {
        alert("Error obteniendo la información")
      }
    })
  }

  OpenAddModalFn(){
    OpenAddModal();
  }

}
