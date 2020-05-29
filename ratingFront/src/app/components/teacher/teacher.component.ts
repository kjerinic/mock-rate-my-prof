import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Teacher} from '../../models/Teacher';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  teacher: Teacher;
  newTeacherForm: FormGroup;

  constructor(private router: Router,
              private formBuilder: FormBuilder) {
    this.teacher = new Teacher();
    this.newTeacherForm = this.createNewTeacherForm();
  }

  ngOnInit(): void {
  }

  private createNewTeacherForm() {
    return this.formBuilder.group({
      FullName: [this.teacher.FullName, [Validators.required]],
      Title: [this.teacher.Title, [Validators.required]]
    });
  }

  saveNewEvalForm() {
    console.log(this.mapFormValueToObject(this.newTeacherForm));
  }

  mapFormValueToObject(formObject: FormGroup) {
    const formValue = formObject.value;

    this.teacher.FullName = formValue.FullName;
    this.teacher.Title = formValue.Title;

    return this.teacher;
  }

}
