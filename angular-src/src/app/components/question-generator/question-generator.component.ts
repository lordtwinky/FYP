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

var fs = require('fs');
var path = require('path');

var mammoth = require("mammoth");




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
  loggedIn = false;
  topic;
  name;
  file: any;
  fileURL;
  generateBool = false;





  constructor(private authService: AuthService, private router: Router, private flashMessage: FlashMessagesService) { }

  ngOnInit() {

    this.authService.getProfile().subscribe(profile => {
      const groupIDs = profile.user.groups
      this.loggedIn = true

      for (var x = 0; x < groupIDs.length; x++) {
        const groupI = {
          groupID: groupIDs[x]
        }
        this.authService.getGroupPage(groupI).subscribe(data => {
          if (data.group != undefined) {
            const topicIDs = data.group.topics;
            for (var i = 0; i < topicIDs.length; i++) {

              const topicI = {
                topicID: topicIDs[i]
              }
              this.authService.getTopicPage(topicI).subscribe(data => {
                if (data.topic !== null && data.topic !== undefined)
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
    if (this.inputText !== undefined) {
      if(this.inputText.trim() !== ""){
    
      this.authService.getQuestions(this.inputText).subscribe(data => {

        var dataArray = eval('(' + data + ')');
        var whoQAarray = dataArray[0];
        var whereQAarray = dataArray[1]
        var whenQAarray = dataArray[2]


        for (var who = 0; who < whoQAarray.length; who++) {
          var whoQ = whoQAarray[who][0]
          var whoA = whoQAarray[who][1]
          var whoI = whoQAarray[who][2]

          const whoQA = {
            question: whoQ,
            answer: whoA,
            index: whoI,
            checked: false
          }

          this.whoQAs.push(whoQA)
          this.whoQ = "e"

        }
        for (var where = 0; where < whereQAarray.length; where++) {
          var whereQ = whereQAarray[where][0]
          var whereA = whereQAarray[where][1]
          var whereI = whereQAarray[where][2]

          const whereQA = {
            question: whereQ,
            answer: whereA,
            index: whereI,
            checked: false
          }

          this.whereQAs.push(whereQA)
          this.whereQ = "e"

        }
        for (var when = 0; when < whenQAarray.length; when++) {
          var whenQ = whenQAarray[when][0]
          var whenA = whenQAarray[when][1]
          var whenI = whenQAarray[when][2]

          const whenQA = {
            question: whenQ,
            answer: whenA,
            index: whenI,
            checked: false
          }

          this.whenQAs.push(whenQA)
          this.whenQ = "e"
        }

      });
      }
      else{
        this.flashMessage.show('Please enter in text to the text area, either by copy pasting or by uploading a .txt file or .docx file', { cssClass: 'alert-danger', timeout: 7500 });
      }

    }
    else{
      this.flashMessage.show('Please enter in text to the text area, either by copy pasting or by uploading a .txt file or .docx file', { cssClass: 'alert-danger', timeout: 7500 });
    }


  }

  UploadtoTopic(){
  if(this.loggedIn == true) {
    if (this.topic != undefined) {
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
  }
  }

  handleFileSelect(event) {



    var that = this
    var file = event.target.files[0];

    if (file.type == "text/plain") {
      let fileReader = new FileReader();
      fileReader.onload = (event) => {
        this.inputText = fileReader.result;
      }
      fileReader.readAsText(file);
    }

    else if (file.type == "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {

      this.readFileInputEventAsArrayBuffer(event, function (arrayBuffer) {
        mammoth.extractRawText({ arrayBuffer: arrayBuffer })
          .then(function (result) {
            var text = result.value; 
            that.inputText = text
          })
          .done();

      });
    }

    else {
      this.flashMessage.show('The MIME type ' + file.type + " is currently not supported. Please use a .docx file, or a .txt file", { cssClass: 'alert-danger', timeout: 6000 });
    }
  }

  readFileInputEventAsArrayBuffer(event, callback) {
    var file = event.target.files[0];

    var reader = new FileReader();

    reader.onload = (loadEvent: any) => {
      var arrayBuffer = loadEvent.target.result;
      callback(arrayBuffer);
    };

    reader.readAsArrayBuffer(file);

  }





}
