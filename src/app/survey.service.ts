import { Injectable } from '@angular/core';
import { Survey } from './survey';
import { Http } from '@angular/http';
import "rxjs";


@Injectable()
export class SurveyService {
  surveys = [];
  constructor(private http:Http) { }

  getPoll(){
    this.http.get('/polls').subscribe( data => {
      console.log("inside get poll area");


      // var api_notes=data.json()['notes'];
      // for(var i=0; i<api_notes.length; i++){
      //   var created_at_string = api_notes[i].created_at;
      //   //returns this string format 2017-08-11T21:55:06.002Z
      //
      //   // *note there is also a json string format that you would have to parse in order to get the date format into what we have received from the api JSON.parse(created_at_json_string);
      //   // console.log(created_at_string)
      //
      //   var created_at = new Date(created_at_string);
      //   //returns date format Fri Aug 11 2017 14:55:06 GMT-0700 (PDT)
      //   // console.log(created_at);
      //
      //   var api_note = new Note(api_notes[i].content, created_at);
      //   this._notes.push(api_note);
    })
  }

}
