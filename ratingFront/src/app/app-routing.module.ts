import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminLoginComponent} from './components/admin-login/admin-login.component';
import {TeacherComponent} from './components/teacher/teacher.component';
import {ErrorPageComponent} from './components/error-page/error-page.component';
import {AdminLogoutComponent} from './components/admin-logout/admin-logout.component';
import {AdminRouteGuardService} from './services/admin-route-guard.service';


const routes: Routes = [
  {path: 'admin-login', component: AdminLoginComponent},
  {path: 'admin-logout', component: AdminLogoutComponent},
  {path: 'teacher', component: TeacherComponent, canActivate: [AdminRouteGuardService]},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
