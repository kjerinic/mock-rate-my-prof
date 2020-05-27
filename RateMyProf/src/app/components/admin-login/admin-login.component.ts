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
  }

  logIn() {
    const username = this.loginForm.value.username;
    if (this.adminService.authAdmin(username)) {
      this.invalidLoginMsg = '';
      // noinspection JSIgnoredPromiseFromCall
      this.router.navigate(['teacher']);
    } else {
      this.invalidLoginMsg = 'Wrong username or password.';
    }
  }

  private createFormGroup() {
    return this.formBuilder.group({
      username: ['', [Validators.required]]
    });
  }


}
