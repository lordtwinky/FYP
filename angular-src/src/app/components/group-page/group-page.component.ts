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
  topics: Array<Object> = [];
  groupID: string;
  group: Object
  topicIDs;
  topicNames;
  tops;
  loggedInUserID;
  joinBool = true;
  usernameInvite;
  groupAdmin;
  admin = false;
  setting = 1;

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.groupID = params['id'];
    });

    const groupI = {
      groupID: this.groupID
    }
    const groupIDd = this.groupID

    this.authService.getGroupPage(groupI).subscribe(data => {
      this.group = data.group;
      this.setting = data.group.setting;
      this.topicIDs = data.group.topics;
      this.groupAdmin = data.group.admin;
      for (var i = 0; i < this.topicIDs.length; i++) {
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
      if (profile.user._id == this.groupAdmin) {
        this.admin = true
      }
      for (var i = 0; i < userGroups.length; i++) {
        if (userGroups[i] == groupIDd) {
          this.joinBool = false;
        }
      }
    },
      err => {

        return false;
      });




  }

  onCreateTopic() {

    if (this.name == "" || this.name == undefined) {
      this.flashMessage.show('Please enter a topic name to create one', { cssClass: 'alert-danger', timeout: 3000 });
    }
    else if (this.name.trim() === "") {
      this.flashMessage.show('Please enter a topic name to create one', { cssClass: 'alert-danger', timeout: 3000 });
    }
    else {
      const topic = {
        topicName: this.name,
        groupID: this.groupID
      }
      this.authService.createTopic(topic).subscribe(data => {
        if (data.success) {
          this.flashMessage.show('Topic created successfully', { cssClass: 'alert-success', timeout: 3000 });
          this.topics.push(data.topic)
        } else {
          this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
        }
      });
    }


  }

  joinGroup() {

    this.joinBool = false

    const userGroupIDs = {
      groupID: this.groupID,
      userID: this.loggedInUserID
    }

      this.authService.joinGroup(userGroupIDs).subscribe(data => {
        if (data.success) {
          this.flashMessage.show('You are now a member of this group!', { cssClass: 'alert-success', timeout: 3000 });
        } else {
          this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
        }
      });
    
  }

  inviteUser() {


    if (this.usernameInvite == "" || this.usernameInvite == undefined) {
      this.flashMessage.show('Please enter a username to invite to group', { cssClass: 'alert-danger', timeout: 3000 });
    }
    else if (this.usernameInvite.trim() === "") {
      this.flashMessage.show('Please enter a username to invite to group', { cssClass: 'alert-danger', timeout: 3000 });
    }
    else {
      const userGroupIDs = {
        groupID: this.groupID,
        username: this.usernameInvite
      }
      this.authService.inviteUserToGroup(userGroupIDs).subscribe(data => {
        if (data.success) {
          this.flashMessage.show('Invitation has been sent to ' + this.usernameInvite + ' successfully', { cssClass: 'alert-success', timeout: 3000 });
        } else {
          if (data.msg == "This user is already a member of this group") {
            this.flashMessage.show(this.usernameInvite + ' is already a member of the group', { cssClass: 'alert-danger', timeout: 3000 });
          }
          else if (data.msg == "This user already has an invite for this group") {
            this.flashMessage.show(this.usernameInvite + ' already has an invite for the group', { cssClass: 'alert-danger', timeout: 3000 });
          }
          else {
            this.flashMessage.show('The username ' + this.usernameInvite + ' does not exist', { cssClass: 'alert-danger', timeout: 3000 });
          }
        }
      });
    }



  }

}
