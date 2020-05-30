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
  allTeachers: Teacher[];
  isInEditMode: boolean;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private teacherService: TeacherService) {
    this.teacher = new Teacher();
    this.allTeachers = [];
    this.isInEditMode = false;
    this.newTeacherForm = this.createNewTeacherForm();
  }

  ngOnInit(): void {
  }

  private createNewTeacherForm() {
    return this.formBuilder.group({
      FullName: [this.teacher.fullName, [Validators.required]],
      Title: [this.teacher.title, [Validators.required]]
    });
  }

  mapFormValueToObject(formObject: FormGroup) {
    const formValue = formObject.value;

    this.teacher.fullName = formValue.FullName;
    this.teacher.title = formValue.Title;

    return this.teacher;
  }

  saveTeacher() {
    this.teacherService.addNewTeacher(this.mapFormValueToObject(this.newTeacherForm)).subscribe(() => {
      alert('Saved.');
      this.newTeacherForm.reset();
      this.showAllTeachers();
    }, error => {
      console.log(error);
    });
  }

  showAllTeachers() {
    this.teacherService.getAllTeachers().subscribe(data => {
      this.allTeachers = data;
    }, error => {
      console.log(error);
    });
  }

  editTeacher(teacher: Teacher) {
    this.isInEditMode = true;
    this.teacher = teacher;
    this.newTeacherForm = this.createNewTeacherForm();
  }

  deleteTeacher(teacher: Teacher) {
    this.teacherService.deleteTeacher(teacher).subscribe(() => {
      alert('Deleted.');
      this.showAllTeachers();
    }, error => {
      console.log(error);
    });
  }

  saveEditedTeacher() {
    this.teacherService.editTeacher(this.mapFormValueToObject(this.newTeacherForm)).subscribe(() => {
      alert('Saved.');
      this.showAllTeachers();
      this.isInEditMode = false;
      this.newTeacherForm.reset();
    }, error => {
      console.log(error);
    });
  }
}
