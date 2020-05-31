import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
// @ts-ignore
import {Username} from '../models/Username';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

  private getAPIUrl(fnName: string): string {
    const url = 'http://localhost:3000/api/';
    return url + fnName;
  }

  authAdmin(username: string): Observable<Username> {
    return this.httpClient.post<Username>(this.getAPIUrl('login'),
      {
        username
      });
  }

  public getAdminUsername(): string {
    return sessionStorage.getItem('username');
  }

  public setAdminUsername(username: string) {
    sessionStorage.setItem('username', username);
  }

  isAdminLoggedIn() {
    const username = sessionStorage.getItem('username');
    return username !== null;
  }

  logOut() {
    sessionStorage.removeItem('username');
  }
}
