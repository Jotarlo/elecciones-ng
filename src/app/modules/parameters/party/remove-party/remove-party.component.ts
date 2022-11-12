import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartyService } from 'src/app/services/parameters/party.service';

@Component({
  selector: 'app-remove-party',
  templateUrl: './remove-party.component.html',
  styleUrls: ['./remove-party.component.css']
})
export class RemovePartyComponent implements OnInit {

  partyName: string = "";

  constructor(
    private route: ActivatedRoute,
    private partyService: PartyService
  ) { }

  ngOnInit(): void {
    this.SearchRecord();
  }


  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    this.partyService.getRecordById(id).subscribe({
      next: (data) => {
        this.partyName = data.nombre;
      },
      error: (err) => {
        alert("Error obteniendo el registro")
      }
    })
  }

  RemoveRecord() {
    let id = this.route.snapshot.params["id"];
    this.partyService.removeRecord(id).subscribe({
      next: (data) => {
        alert("Eliminado correctamente");
      },
      error: (err) => {
        alert("Este movimiento está asociado a un candidato")
      }
    });
  }
}
