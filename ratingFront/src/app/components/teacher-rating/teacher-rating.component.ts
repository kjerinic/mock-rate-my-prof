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

  private mapFormToObject(formGroup: FormGroup): TeacherRating {
    const formValue = formGroup.value;

    this.rating.teacherId = formValue.Teacher;
    this.rating.grade = formValue.Grade;
    this.rating.comment = formValue.Comment;

    return this.rating;
  }

  saveRating() {
    console.log(this.mapFormToObject(this.newRatingForm));
    this.teacherRatingService.addNewRating(this.mapFormToObject(this.newRatingForm)).subscribe( () => {
      alert('Saved.');
      this.newRatingForm.reset();
    }, err => {
      console.log(err);
    });
  }

  private createFormGroup() {
    return this.formBuilder.group({
      Teacher: [this.rating.teacherId, [Validators.required]],
      Grade: [this.rating.grade, [Validators.required, Validators.pattern('^(0|[1-9]|10)$')]],
      Comment: [this.rating.comment, [Validators.required, Validators.pattern('(.|\\s)*\\S(.|\\s)*')]]
    });
  }
}
