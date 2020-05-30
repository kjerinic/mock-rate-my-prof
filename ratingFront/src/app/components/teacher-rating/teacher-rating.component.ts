import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Teacher} from '../../models/Teacher';
import {TeacherRating} from '../../models/TeacherRating';
import {TeacherRatingService} from '../../services/teacher-rating.service';

@Component({
  selector: 'app-teacher-rating',
  templateUrl: './teacher-rating.component.html',
  styleUrls: ['./teacher-rating.component.scss']
})
export class TeacherRatingComponent implements OnInit {
  newRatingForm: FormGroup;
  teachers: Teacher[];
  rating: TeacherRating;

  constructor(private formBuilder: FormBuilder, private teacherRatingService: TeacherRatingService) {
    this.rating = new TeacherRating();
    this.teachers = [];
    this.newRatingForm = this.createFormGroup();
  }

  ngOnInit(): void {
    this.teacherRatingService.getAllTeachers().subscribe(data => {
      this.teachers = data;
    }, err => {
      console.log(err);
    });
  }

  private mapFormToObject(formGroup: FormGroup) {
    const formValue = formGroup.value;

    this.rating.teacher = formValue.Teacher;
    this.rating.grade = formValue.Grade;
    this.rating.comment = formValue.Comment;

    return this.rating;
  }

  saveRating() {
    console.log(this.mapFormToObject(this.newRatingForm));
  }

  private createFormGroup() {
    return this.formBuilder.group({
      Teacher: [null, [Validators.required]],
      Grade: [this.rating.grade, [Validators.required]],
      Comment: [this.rating.comment, [Validators.required]]
    });
  }
}
