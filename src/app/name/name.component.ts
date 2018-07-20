import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyService } from './../survey.service';
import { Survey } from '../survey';


@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  survey = new Survey();
  username = [];


  constructor(private router:Router, private surveyservice:SurveyService) { }

  ngOnInit() {
  }

  onSubmit()
  {

    this.username.push(this.username);

    this.router.navigate(['/create']);
  }

}
