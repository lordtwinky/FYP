import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


declare function require(name: string);
var nlp = require('compromise');
var  http = require('http');
var  util = require('util');
var  https = require('https');


@Component({
  selector: 'app-question-generator',
  templateUrl: './question-generator.component.html',
  styleUrls: ['./question-generator.component.css']
})
export class QuestionGeneratorComponent implements OnInit {
  inputText: String;
  q: string;
  answer: string;
  whoQuestions;
  whoAnswers;
  whereQuestions;
  whereAnswers;
  whenQuestions;
  whenAnswers;

  constructor(private authService: AuthService, private router: Router) { }


  ngOnInit() {
    if(this.inputText !== undefined){
    this.onGenerateQuestions();
    }
  }

  onGenerateQuestions(){

            this.authService.getQuestions(this.inputText).subscribe(data =>{

              var dataArray = eval('(' + data + ')');
              var whoQAarray = dataArray[0];
              var whereQAarray = dataArray[1]
              var whenQAarray = dataArray[2]
              var whoQs = []
              var whoAs = []
              var whereQs = []
              var whereAs = []
              var whenQs = []
              var whenAs = []

              for(var who = 0; who < whoQAarray.length; who++){
                var whoQ = whoQAarray[who][0]
                var whoA = whoQAarray[who][1]
                whoQs.push(whoQ)
                whoAs.push(whoA)
              }
              for(var where = 0; where < whereQAarray.length; where++){
                var whereQ = whereQAarray[where][0]
                var whereA = whereQAarray[where][1]
                whereQs.push(whereQ)
                whereAs.push(whereA)
              }
              for(var when = 0; when < whenQAarray.length; when++){
                var whenQ = whenQAarray[when][0]
                var whenA = whenQAarray[when][1]
                whenQs.push(whenQ)
                whenAs.push(whenA)
              }
              
              this.whoQuestions = whoQs
              this.whoAnswers = whoAs

              this.whereQuestions = whereQs
              this.whereAnswers = whereAs

              this.whenQuestions = whenQs
              this.whenAnswers = whenAs

           });
  }



}
