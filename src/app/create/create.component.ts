import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyService } from './../survey.service';
import { Survey } from '../survey';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
    survey = new Survey();


    constructor(private router:Router, private surveyservice:SurveyService) { }

  ngOnInit() {
  }

  onSubmit(formdata){
    if(formdata.valid){
      // this.surveyservice.push(this.product);
      // this.user = new User();



      // this.surveyservice.createProduct(this.product); //push
      // console.log(this.product)

      // this.router.navigate(['/dashboard']) //reroute

    }
    else{
      console.log("error");
    }
    // this.product = new Product();

    // formdata.pristine = true;
    // formdata.valid = true;

  }

}
