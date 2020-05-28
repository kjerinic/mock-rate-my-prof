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

@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    AdminLoginComponent,
    NavbarComponent,
    ErrorPageComponent,
    AdminLogoutComponent
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
