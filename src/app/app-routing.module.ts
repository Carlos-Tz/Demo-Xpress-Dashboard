import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { AuthGuard } from './shared/auth.guard';
import { SecureInnerPagesGuard } from './shared/secure-inner-pages.guard';
import { ShowSurveyComponent } from './components/show-survey/show-survey.component';

const routes: Routes = [
  {path: '',redirectTo:'/login',pathMatch:'full'},
  {path: 'login', component:LoginComponent, canActivate: [SecureInnerPagesGuard]},
  {path: 'dashboard', component:DashboardComponent, canActivate: [AuthGuard]},
  {path: 'show-survey/:key',component:ShowSurveyComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
