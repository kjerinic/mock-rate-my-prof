import {Component, OnInit} from '@angular/core';
import {AdminService} from '../../services/admin.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isAdminLoggedIn: boolean;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.isAdminLoggedIn = this.adminService.isAdminLoggedIn();
  }

}
