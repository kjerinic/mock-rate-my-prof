import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

  private getUrl(fnName: string): string {
    const url = 'http://localhost:3000/api/';
    return url + fnName;
  }

  authAdmin(username: string) {
    if (username === 'kaca') {
      sessionStorage.setItem('username', username);
      return true;
    } else {
      return false;
    }
  }

  isAdminLoggedIn() {
    const username = sessionStorage.getItem('username');
    return username !== null;
  }

  logOut() {
    sessionStorage.removeItem('username');
  }
}
