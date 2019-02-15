import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../../shared/survey.service';
import { Survey } from '../../shared/survey';

import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  p: number = 1;
  Survey: Survey[];
  hideNoSurvey: boolean = false;
  noData: boolean = false;
  filter_key = '';

  public pieChartLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  public pieChartLabels2 = ['Radio', 'Facebook', 'Web', 'Email', 'Otro', 'Ninguno'];
  public pieChartType = 'pie';
  public colors = [{ backgroundColor: ['#f44336', '#40c4ff', '#ff9800', '#9575cd ', '#ffeb3b', '#795548', '#cddc39', '#81c784', '#607d8b', '#4caf50'] }];
  public colors2 = [{ backgroundColor: ['#f44336', '#40c4ff', '#ff9800', '#9575cd ', '#ffeb3b', '#795548'] }];


  public l1 = [];
  public atencion = [];
  public seguimiento = [];
  public tiempo = [];
  public satisfaccion = [];
  public experiencia = [];
  public recomendacion = [];
  public medio = [];
  public barChartData = [];
  public group1 = 'group1';
  public group1b = 'group1b';
  public group1c = 'group1c';
  public group2 = 'group2';
  public group3 = 'group3';
  public group4 = 'group4';
  public group5 = 'group5';

  constructor(
    public surveyApi: SurveyService,
    public authService: AuthService
  ) { }

  ngOnInit() {
    let s = this.surveyApi.GetSurveysList();
    s.snapshotChanges().subscribe(data => {
      this.Survey = [];
      data.reverse();
      data.forEach(item => {
        let surv = item.payload.toJSON();
        surv['$key'] = item.key;
        this.Survey.push(surv as Survey);
        this.l1.push(surv);
      });
      this.calc();
    })


  }

  calc() {
    let g1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let g1b = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let g1c = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let g2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let g3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let g4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let g5 = [0, 0, 0, 0, 0, 0];
    this.l1.forEach(it => {
      switch (it.group1) {
        case '1': g1[0]++; break;
        case '2': g1[1]++; break;
        case '3': g1[2]++; break;
        case '4': g1[3]++; break;
        case '5': g1[4]++; break;
        case '6': g1[5]++; break;
        case '7': g1[6]++; break;
        case '8': g1[7]++; break;
        case '9': g1[8]++; break;
        case '10': g1[9]++; break;
        default: break;
      }
      switch (it.group1b) {
        case '1': g1b[0]++; break;
        case '2': g1b[1]++; break;
        case '3': g1b[2]++; break;
        case '4': g1b[3]++; break;
        case '5': g1b[4]++; break;
        case '6': g1b[5]++; break;
        case '7': g1b[6]++; break;
        case '8': g1b[7]++; break;
        case '9': g1b[8]++; break;
        case '10': g1b[9]++; break;
        default: break;
      }
      switch (it.group1c) {
        case '1': g1c[0]++; break;
        case '2': g1c[1]++; break;
        case '3': g1c[2]++; break;
        case '4': g1c[3]++; break;
        case '5': g1c[4]++; break;
        case '6': g1c[5]++; break;
        case '7': g1c[6]++; break;
        case '8': g1c[7]++; break;
        case '9': g1c[8]++; break;
        case '10': g1c[9]++; break;
        default: break;
      }
      switch (it.group2) {
        case '1': g2[0]++; break;
        case '2': g2[1]++; break;
        case '3': g2[2]++; break;
        case '4': g2[3]++; break;
        case '5': g2[4]++; break;
        case '6': g2[5]++; break;
        case '7': g2[6]++; break;
        case '8': g2[7]++; break;
        case '9': g2[8]++; break;
        case '10': g2[9]++; break;
        default: break;
      }
      switch (it.group3) {
        case '1': g3[0]++; break;
        case '2': g3[1]++; break;
        case '3': g3[2]++; break;
        case '4': g3[3]++; break;
        case '5': g3[4]++; break;
        case '6': g3[5]++; break;
        case '7': g3[6]++; break;
        case '8': g3[7]++; break;
        case '9': g3[8]++; break;
        case '10': g3[9]++; break;
        default: break;
      }
      switch (it.group4) {
        case '1': g4[0]++; break;
        case '2': g4[1]++; break;
        case '3': g4[2]++; break;
        case '4': g4[3]++; break;
        case '5': g4[4]++; break;
        case '6': g4[5]++; break;
        case '7': g4[6]++; break;
        case '8': g4[7]++; break;
        case '9': g4[8]++; break;
        case '10': g4[9]++; break;
        default: break;
      }
      switch (it.group5) {
        case 'Radio': g5[0]++; break;
        case 'Facebook': g5[1]++; break;
        case 'Web': g5[2]++; break;
        case 'email': g5[3]++; break;
        case 'otro': g5[4]++; break;
        case 'ninguno': g5[5]++; break;
        default: break;
      }
    })
    for (var _i = 0; _i < 10; _i++) {
      let l = this.Survey.length+1;
      if (g1[_i] >= l) { g1[_i] = g1[_i] / l; }
      if (g1b[_i] >= l) { g1b[_i] = g1b[_i] / l; }
      if (g1c[_i] >= l) { g1c[_i] = g1c[_i] / l; }
      if (g2[_i] >= l) { g2[_i] = g2[_i] / l; }
      if (g3[_i] >= l) { g3[_i] = g3[_i] / l; }
      if (g4[_i] >= l) { g4[_i] = g4[_i] / l; }
      if (_i < 6) {
        if (g5[_i] >= l) { g5[_i] = g5[_i] / l; }
      }
    }

    this.atencion = g1;
    this.seguimiento = g1b;
    this.tiempo = g1c;
    this.satisfaccion = g2;
    this.experiencia = g3;
    this.recomendacion = g4;
    this.medio = g5;
  }


}
