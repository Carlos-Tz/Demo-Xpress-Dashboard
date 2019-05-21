import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
//import { NgxPaginationModule } from 'ngx-pagination';
import { ChartsModule } from 'ng2-charts';
//import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';

import { environment } from '../environments/environment';

import { AuthService } from './shared/auth.service';
import { ShowSurveyComponent } from './components/show-survey/show-survey.component';
import { database } from 'firebase';
//import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    ShowSurveyComponent/* ,
    FilterPipe */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
   // NgxPaginationModule,
    ChartsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    DataTablesModule
  ],
  providers: [AuthService, { provide: FirestoreSettingsToken, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
