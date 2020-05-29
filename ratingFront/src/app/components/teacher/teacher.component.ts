import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Teacher} from '../../models/Teacher';
import {TeacherService} from '../../services/teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  teacher: Teacher;
  newTeacherForm: FormGroup;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private teacherService: TeacherService) {
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
    this.teacherService.addNewTeacher(this.mapFormValueToObject(this.newTeacherForm)).subscribe(() => {
      console.log('Saved.');
      this.newTeacherForm.reset();
    }, error => {
      console.log(error);
    });
  }

  mapFormValueToObject(formObject: FormGroup) {
    const formValue = formObject.value;

    this.teacher.FullName = formValue.FullName;
    this.teacher.Title = formValue.Title;

    return this.teacher;
  }

}
