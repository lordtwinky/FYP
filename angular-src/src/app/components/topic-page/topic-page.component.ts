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
  admin = false;


  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    //we get the id of the topic that has been clicked on to navigate to this page
    this.route.params.subscribe(params => {
      this.topicID = params['id'];
    });

    const topicI = {
      topicID: this.topicID
    }

    //with the id, we get the topic object, along with all of its associated documents
    this.authService.getTopicPage(topicI).subscribe(data => {
      this.topic = data.topic;
      this.documents = data.documents;
      console.log(this.documents)
    });

    //We now check to see whether the user is the admin (by first viewing the group that the topic belongs to)
    this.authService.findGroupOfTopic(topicI).subscribe(data => {
      //we get the user that is logged in 
      this.authService.getProfile().subscribe(profile => {
        if (data.foundGroupAdmin == profile.user._id) {
          this.admin = true
        }
      },
        err => {
          return false;
        });


    });

    

  }

  editQA(docID, i, question, answer, type) {

    //we edit the checked value in the front-end
    
    for (var docs = 0; docs < this.documents.length; docs++) {
      if (this.documents[docs]._id == docID) {
        if (type == "whenQA") {
          this.documents[docs].whenQAs[i].checked=true;
        }
        else if (type == "whereQA") {
          this.documents[docs].whereQAs[i].checked=true;
        }
        else if (type == "whoQA") {
          this.documents[docs].whoQAs[i].checked=true;
        }
      }
    }

    //we edit the QA in the back-end

    const editTextArray = [];
    editTextArray.push(question, answer)

    const updatedDoc = {
      documentID: docID,
      type: type,
      index: i,
      editText: editTextArray
    }

    this.authService.updateDocumentEdit(updatedDoc).subscribe(data => {
      if (data.success) {
     //   this.flashMessage.show('Update successful', { cssClass: 'alert-success', timeout: 3000 });
      } else {
        // console.log(data.foundGroup._id)
      }
    });

  }

  deleteQA(docID, i, type) {

    //Delete in the displayed table (front-end)

    for (var docs = 0; docs < this.documents.length; docs++) {
      if (this.documents[docs]._id == docID) {
        if (type == "whenQA") {
          this.documents[docs].whenQAs.splice(i, 1);
        }
        else if (type == "whereQA") {
          this.documents[docs].whereQAs.splice(i, 1);
        }
        else if (type == "whoQA") {
          this.documents[docs].whoQAs.splice(i, 1);
        }
      }
    }


    //Delete in the database (back-end)

    const updatedDoc = {
      documentID: docID,
      type: type,
      index: i
    }

    this.authService.updateDocumentDelete(updatedDoc).subscribe(data => {
      if (data.success) {
      //  this.flashMessage.show('Deleted row successfully', { cssClass: 'alert-success', timeout: 3000 });
      } else {
        // console.log(data)
      }
    });

  }

  check(docID, i, type) {

    //front-end 

    for (var docs = 0; docs < this.documents.length; docs++) {
      if (this.documents[docs]._id == docID) {
        if (type == "whenQA") {
          if(this.documents[docs].whenQAs[i].checked==false){
            this.documents[docs].whenQAs[i].checked=true;
          }
          else{
            this.documents[docs].whenQAs[i].checked=false;
          }
        }
        else if (type == "whereQA") {
          if(this.documents[docs].whereQAs[i].checked==false){
            this.documents[docs].whereQAs[i].checked=true;
          }
          else{
            this.documents[docs].whereQAs[i].checked=false;
          }
        }
        else if (type == "whoQA") {
          if(this.documents[docs].whoQAs[i].checked==false){
            this.documents[docs].whoQAs[i].checked=true;
          }
          else{
            this.documents[docs].whoQAs[i].checked=false;
          }
        }
      }
    }

    //back-end

    const updatedDoc = {
      documentID: docID,
      type: type,
      index: i,
      editText: null
    }

    this.authService.updateDocumentEdit(updatedDoc).subscribe(data => {
      if (data.success) {
        //this.flashMessage.show('Update successful', { cssClass: 'alert-success', timeout: 3000 });
      } else {
        // console.log(data.foundGroup._id)
      }
    });
  }

  addRow(docID, type) {

    //add row in displayed table (front-end)

    const newRow = {
      question: "",
      answer: "",
      checked: false
    }

    for (var docs = 0; docs < this.documents.length; docs++) {
      if (this.documents[docs]._id == docID) {
        if (type == "whenQA") {
          this.documents[docs].whenQAs.push(newRow)
        }
        else if (type == "whoQA") {
          this.documents[docs].whoQAs.push(newRow)
        }
        else if (type == "whereQA") {
          this.documents[docs].whereQAs.push(newRow)
        }
      }
    }

    //add row (Question+Answer) in backend

    const updatedDoc = {
      documentID: docID,
      type: type,
      checked: false
    }

    this.authService.updateDocumentAdd(updatedDoc).subscribe(data => {
      if (data.success) {
       // this.flashMessage.show('Added row successfully', { cssClass: 'alert-success', timeout: 3000 });
      } else {
        // console.log(data)
      }
    });


  }





}
