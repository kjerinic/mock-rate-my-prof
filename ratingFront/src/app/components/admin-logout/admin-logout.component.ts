import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../services/admin.service';

@Component({
  selector: 'app-admin-logout',
  templateUrl: './admin-logout.component.html',
  styleUrls: ['./admin-logout.component.scss']
})
export class AdminLogoutComponent implements OnInit {
  logoutMsg: string;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.logoutMsg = 'You are no longer logged in as admin.';
    this.adminService.logOut();
  }

}
