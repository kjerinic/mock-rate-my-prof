import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TeacherComponent} from './components/teacher/teacher.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { AdminLogoutComponent } from './components/admin-logout/admin-logout.component';
import {HttpClientModule} from '@angular/common/http';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { TeacherRatingComponent } from './components/teacher-rating/teacher-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    AdminLoginComponent,
    NavbarComponent,
    ErrorPageComponent,
    AdminLogoutComponent,
    WelcomePageComponent,
    TeacherRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
