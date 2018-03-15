import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router'
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-group-page',
  templateUrl: './group-page.component.html',
  styleUrls: ['./group-page.component.css']
})
export class GroupPageComponent implements OnInit {
  name: string;
  topics: Array<Object>;
  groupID: string;
  group: Object
  topicIDs;
  topicNames;
  tops;
  loggedInUserID;
  joinBool = true;

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.topics = [];
    this.route.params.subscribe(params => {
      this.groupID = params['id'];
    });

    const groupI = {
      groupID: this.groupID
    }
    const groupIDd = this.groupID

    this.authService.getGroupPage(groupI).subscribe(data => {
      this.group = data.group;
      this.topicIDs = data.group.topics;
      for(var i=0; i<this.topicIDs.length;i++){
        const topicI = {
          topicID: this.topicIDs[i]
        }
        this.authService.getTopicPage(topicI).subscribe(data => {
          this.topics.push(data.topic)
        });
      }
    });

    this.authService.getProfile().subscribe(profile => {
      this.loggedInUserID = profile.user._id;
      const userGroups = profile.user.groups;
      for(var i=0;i<userGroups.length;i++){
        if(userGroups[i] == groupIDd){
          this.joinBool = false;
          
        }
      }
    },
    err => {
      console.log(err);
      return false;
    });




  }

  onCreateTopic() {
    const topic = {
      topicName: this.name,
      groupID: this.groupID
    }

    this.authService.createTopic(topic).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('Topic created successfully', { cssClass: 'alert-success', timeout: 3000 });
      } else {
        this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
      }
    });

  }

  joinGroup(){

    const userGroupIDs = {
      groupID: this.groupID,
      userID: this.loggedInUserID
    }

    this.authService.joinGroup(userGroupIDs).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('Group created successfully', { cssClass: 'alert-success', timeout: 3000 });
      } else {
        this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
      }
    });
    
  }

}
