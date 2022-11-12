import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  roleId: string = '';
  isLogged: boolean = false;
  fullname:string = '';
  constructor(
    private secService: SecurityService,
    private lsService: LocalStorageService
  ) { }

  ngOnInit(): void {

    this.secService.getUserData().subscribe({
      next: (data: UserModel) => {
        this.isLogged = data.isLogged;
        this.roleId = data.role;
        this.fullname = data.name;
      },
      error: (err) => {

      }
    });
  }

}
