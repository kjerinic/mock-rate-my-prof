import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AdminService} from '../../services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  loginForm: FormGroup;
  invalidLoginMsg: string;

  constructor(private formBuilder: FormBuilder, private router: Router, private adminService: AdminService) {
    this.loginForm = this.createFormGroup();
    this.invalidLoginMsg = '';
  }

  ngOnInit(): void {
    if (this.adminService.isAdminLoggedIn()) {
      this.router.navigate(['teacher']);
    }
  }

  logIn() {
    const username = this.loginForm.value.username;
    this.adminService.authAdmin(username).subscribe(data => {
      if (data) {
        this.invalidLoginMsg = '';
        this.adminService.setAdminUsername(data.username);
        this.router.navigate(['teacher']);
      } else {
        this.invalidLoginMsg = 'Wrong username or password.';
      }
    });
  }

  private createFormGroup() {
    return this.formBuilder.group({
      username: ['', [Validators.required]]
    });
  }


}
