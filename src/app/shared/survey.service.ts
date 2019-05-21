import { Injectable } from '@angular/core';
//import { Survey } from '../shared/survey';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  /* surveysList: AngularFireList<any>;*/
  surveyObject: AngularFireObject<any>; 

  constructor(private db: AngularFireDatabase) { }


  GetSurveysList() {
    /* this.surveysList = this.db.list('surveys-list', ref =>
      ref.orderByChild('date')
    );
    return this.surveysList; */
    return this.db.list('surveys-list');
  }

  getSurvey(key: string) {
    this.surveyObject = this.db.object('surveys-list/' + key);
    return this.surveyObject;
   /*  return this.db.object('surveys-list/' + key); */
  }
}
