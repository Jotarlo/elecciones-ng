import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged: boolean = false;
  constructor(
    private secService: SecurityService
  ) { }

  ngOnInit(): void {
    this.secService.getUserData().subscribe({
      next: (data:UserModel)=>{
        this.isLogged = data.isLogged;
      },
      error: (err) =>{

      }
    });
  }

}
