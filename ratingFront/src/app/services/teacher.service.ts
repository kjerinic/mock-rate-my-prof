import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Teacher} from '../models/Teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private httpClient: HttpClient) {
  }

  private getAPIUrl(fnName: string): string {
    const url = 'http://localhost:3000/api/';
    return url + fnName;
  }

  getAllTeachers(): Observable<Teacher[]> {
    return this.httpClient.get<Teacher[]>(this.getAPIUrl('teachers'));
  }

  addNewTeacher(teacher: Teacher): Observable<any> {
    const params = new HttpHeaders().set('username', 'admin');
    return this.httpClient.post<any>(this.getAPIUrl('teachers'),
      {
        fullName: teacher.fullName,
        title: teacher.title
      }, {headers: params});
  }

  editTeacher(teacher: Teacher): Observable<any> {
    const params = new HttpHeaders().set('username', 'admin');
    return this.httpClient.put<any>(this.getAPIUrl('teachers'),
      {
        id: teacher.id,
        fullName: teacher.fullName,
        title: teacher.title
      }, {headers: params});
  }

  deleteTeacher(teacher: Teacher): Observable<any> {
    const params = new HttpHeaders().set('username', 'admin');
    return this.httpClient.delete<any>(this.getAPIUrl('teachers/' + teacher.id), {headers: params});
  }
}
