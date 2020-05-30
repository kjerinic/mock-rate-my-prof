import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Teacher} from '../models/Teacher';
import {TeacherRating} from '../models/TeacherRating';

@Injectable({
  providedIn: 'root'
})
export class TeacherRatingService {
  constructor(private httpClient: HttpClient) {
  }

  private getAPIUrl(fnName: string): string {
    const url = 'http://localhost:3000/api/';
    return url + fnName;
  }

  getAllTeachers(): Observable<Teacher[]> {
    return this.httpClient.get<Teacher[]>(this.getAPIUrl('teachers'));
  }

  addNewRating(teacherRating: TeacherRating): Observable<any> {
    return this.httpClient.post<any>(this.getAPIUrl('teachers/rating'),
      {
        teacher_id: +teacherRating.teacherId,
        grade: +teacherRating.grade,
        comment: teacherRating.comment
      });
  }
}
