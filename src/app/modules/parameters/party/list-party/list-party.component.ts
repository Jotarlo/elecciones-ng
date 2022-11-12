import { Component, OnInit } from '@angular/core';
import { ApisInfo } from 'src/app/config/apis-info';
import { PartyModel } from 'src/app/models/party.model';
import { PartyService } from 'src/app/services/parameters/party.service';

@Component({
  selector: 'app-list-party',
  templateUrl: './list-party.component.html',
  styleUrls: ['./list-party.component.css']
})
export class ListPartyComponent implements OnInit {

  urlServer = ApisInfo.LOGIC_MS_URL;
  recordList: PartyModel[] = [];

  constructor(
    private partyService: PartyService
  ) { }

  ngOnInit(): void {
    this.partyService.getRecordList().subscribe({
      next: (data) => {
        this.recordList = data;
      },
      error: (err) => {
        alert("Error obteniendo la información")
      }
    });
  }

}
