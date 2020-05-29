import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminLoginComponent} from './components/admin-login/admin-login.component';
import {TeacherComponent} from './components/teacher/teacher.component';
import {ErrorPageComponent} from './components/error-page/error-page.component';
import {AdminLogoutComponent} from './components/admin-logout/admin-logout.component';
import {AdminRouteGuardService} from './services/admin-route-guard.service';
import {WelcomePageComponent} from './components/welcome-page/welcome-page.component';
import {TeacherRatingComponent} from './components/teacher-rating/teacher-rating.component';


const routes: Routes = [
  {path: '', component: WelcomePageComponent},
  {path: 'admin-login', component: AdminLoginComponent},
  {path: 'admin-logout', component: AdminLogoutComponent, canActivate: [AdminRouteGuardService]},
  {path: 'teacher', component: TeacherComponent, canActivate: [AdminRouteGuardService]},
  {path: 'teacher-rating', component: TeacherRatingComponent},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
