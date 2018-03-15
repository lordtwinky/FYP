import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ValidateService } from '../../services/validate.service';
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from '@angular/router'
import { FlashMessagesService } from 'angular2-flash-messages';

declare function require(name: string);
var nlp = require('compromise');
var http = require('http');
var util = require('util');
var https = require('https');


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
  user;
  topicIDs;
  topics = [];
  groupNames: Array<String>;
  loggedInUserID;
  topic;
  name;
 
  constructor(private authService: AuthService, private router: Router,     private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    if (this.inputText !== undefined) {
      this.onGenerateQuestions();
    }
    
    this.authService.getProfile().subscribe(profile => {
      const groupIDs = profile.user.groups

      for (var x = 0; x < groupIDs.length; x++) {
        const groupI = {
          groupID: groupIDs[x]
        }
        this.authService.getGroupPage(groupI).subscribe(data => {
          if(data.group != undefined){
          const topicIDs = data.group.topics;
          for(var i=0; i< topicIDs.length;i++){
            
            const topicI = {
              topicID: topicIDs[i]
            }
            this.authService.getTopicPage(topicI).subscribe(data => {
              if(data.topic !== null && data.topic !== undefined)
              this.topics.push(data.topic)
            });
          }
        }
        });
      }

    },
      err => {
        console.log(err);
        return false;
      });

  }

  onGenerateQuestions() {

    this.authService.getQuestions(this.inputText).subscribe(data => {

      var dataArray = eval('(' + data + ')');
      var whoQAarray = dataArray[0];
      var whereQAarray = dataArray[1]
      var whenQAarray = dataArray[2]


      for (var who = 0; who < whoQAarray.length; who++) {
        var whoQ = whoQAarray[who][0]
        var whoA = whoQAarray[who][1]

        const whoQA = {
          question: whoQ,
          answer: whoA
        }

        this.whoQAs.push(whoQA)
        this.whoQ = "e"

      }
      for (var where = 0; where < whereQAarray.length; where++) {
        var whereQ = whereQAarray[where][0]
        var whereA = whereQAarray[where][1]

        const whereQA = {
          question: whereQ,
          answer: whereA
        }

        this.whereQAs.push(whereQA)
        this.whereQ = "e"

      }
      for (var when = 0; when < whenQAarray.length; when++) {
        var whenQ = whenQAarray[when][0]
        var whenA = whenQAarray[when][1]

        const whenQA = {
          question: whenQ,
          answer: whenA
        }

        this.whenQAs.push(whenQA)
        this.whenQ = "e"
      }
      
      // if the user has chosen a topic

      if(this.topic != undefined){
        const document = {
          name: this.name,
          text: this.inputText,
          whoQAs: this.whoQAs,
          whereQAs: this.whereQAs,
          whenQAs: this.whenQAs,
          topicID: this.topic
        }

        this.authService.createDocument(document).subscribe(data => {
          if (data.success) {
            this.flashMessage.show('Added document successfully', { cssClass: 'alert-success', timeout: 3000 });
          } else {
            this.flashMessage.show('Error adding document to topic', { cssClass: 'alert-danger', timeout: 3000 });
          }
        });
      }

    });
  }




}
