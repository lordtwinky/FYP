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
  whoQAs = [];
  whereQAs = [];
  whenQAs = [];
  whoQ;
  whereQ;
  whenQ;
  user: Object;
  topicIDs;
  topics;
  groupNames:Array<String>;
  
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if(this.inputText !== undefined){
    this.onGenerateQuestions();
    }

    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
      this.groupNames = profile.groups;
    },
    err => {
      console.log(err);
      return false;
    });

    console.log(this.user)
    // this.getUserTopics();
  }

  onGenerateQuestions(){

            this.authService.getQuestions(this.inputText).subscribe(data =>{

              var dataArray = eval('(' + data + ')');
              var whoQAarray = dataArray[0];
              var whereQAarray = dataArray[1]
              var whenQAarray = dataArray[2]


              for(var who = 0; who < whoQAarray.length; who++){
                var whoQ = whoQAarray[who][0]
                var whoA = whoQAarray[who][1]

                const whoQA = {
                  question: whoQ,
                  answer: whoA
                }

                this.whoQAs.push(whoQA)
                this.whoQ = "e"

              }
              for(var where = 0; where < whereQAarray.length; where++){
                var whereQ = whereQAarray[where][0]
                var whereA = whereQAarray[where][1]
                
                const whereQA = {
                  question: whereQ,
                  answer: whereA
                }

                this.whereQAs.push(whereQA)
                this.whereQ = "e"

              }
              for(var when = 0; when < whenQAarray.length; when++){
                var whenQ = whenQAarray[when][0]
                var whenA = whenQAarray[when][1]
                
                const whenQA = {
                  question: whenQ,
                  answer: whenA
                }

                this.whenQAs.push(whenQA)
                this.whenQ = "e"
              }

           });
  }

  // getUserTopics(){

  //   for(var x=0; x<this.user.groups.length;x++){
  //     this.authService.getGroupPage(this.user.groups[x]).subscribe(data => {
  //       this.topicIDs = data.group.topics;
  //       for(var i=0; i<this.topicIDs.length;i++){
  //         this.authService.getTopicPage(this.topicIDs[i]).subscribe(data => {
  //           this.topics.push(data.topic)
  //         });
  //       }
  //     });
  //   }

  // }



}
