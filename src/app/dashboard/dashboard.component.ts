import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyService } from './../survey.service';
import { Survey } from '../survey';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // @Input()survey:Survey;
  constructor(private router:Router, private surveyservice:SurveyService) { }

  ngOnInit() {
  }

}
