import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router'
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-topic-page',
  templateUrl: './topic-page.component.html',
  styleUrls: ['./topic-page.component.css']
})
export class TopicPageComponent implements OnInit {
  name: string;
  topics: Array<Object>;
  topicID: string;
  topic: Object
  topicName: string;
  documents;
  whenQs = [];
  whenAs = [];
  whereQAs = [];
  whoQAs = [];

  test;

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.topicID = params['id'];
    });

    const topicI = {
      topicID: this.topicID
    }

    this.authService.getTopicPage(topicI).subscribe(data => {
      this.topic = data.topic;
      this.documents = data.documents;
      const test = [];
      for(var i = 0; i< data.documents.length;i++){
        for(var j=0; j<data.documents[i].whenQAs.length;j++){
          const QA = []
          QA.push(data.documents[i].whenQAs[j].question)
          QA.push(data.documents[i].whenQAs[j].answer)
          // this.tableRows.push(data.documents[i].whenQAs[j].question)
          // this.whenAs.push(data.documents[i].whenQAs[j].answer)
        }
        // this.whenQAs.push(data.documents[i].whenQAs)
        // this.whereQAs.push(data.documents[i].whereQAs)
        // this.whoQAs.push(data.documents[i].whoQAs)
        // this.test.push("hello")
      }
      
    });
   // this.tableRows = this.whenQAs
    // this.tableRows.push(this.whenQs, this.whenAs)

  }

  // edit(z,i,docID){
  //   this.documents[z].whenQAs[i].question = this.documents.whenQAs[i].question
  //   console.log(docID)
  // }

  edit(i,docID){
    console.log(docID)
  }

  // delete(index){
  //   for(var a=0;a<this.documents.length;a++){
  //     for(var b=0;b<this.documents[a].whenQAs.length;b++){
  //       if(index == b){
  //         this.documents[a].whenQAs.remove(this.documents[a].whenQAs[b])
  //       }
  //     }
  //   }
  // }

  tap(){
    console.log("docID")
  }

  

}
