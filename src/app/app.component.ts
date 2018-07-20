import { Component } from '@angular/core';
import { Survey } from './survey';
import { SurveyService } from './survey.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fail';

  surveys: Survey[];
  constructor(private _surveyservice:SurveyService){

    // this.surveys = _surveyservice.surveys();
  }



}
