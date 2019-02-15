import { Component, OnInit } from '@angular/core';
import { SurveyService } from 'src/app/shared/survey.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-show-survey',
  templateUrl: './show-survey.component.html',
  styleUrls: ['./show-survey.component.css']
})
export class ShowSurveyComponent implements OnInit {

  name=''; group1=0; group1b=0; group1c=0; group1d=''; group2=0; group3=0; 
  group3b=''; group4=0; group5='';
  constructor(
    private surveyApi: SurveyService,
    private location: Location,
    private actRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    const key = this.actRouter.snapshot.paramMap.get('key');
    this.surveyApi.getSurvey(key).valueChanges().subscribe(data => {
      
      this.name = data.name;
      this.group1 = data.group1;
      this.group1b = data.group1b;
      this.group1c = data.group1c;
      this.group1d = data.group1d;
      this.group2 = data.group2;
      this.group3 = data.group3;
      this.group3b = data.group3b;
      this.group4 = data.group4;
      this.group5 = data.group5;
    });
  }

  goBack() {
    this.location.back();
  }

}
