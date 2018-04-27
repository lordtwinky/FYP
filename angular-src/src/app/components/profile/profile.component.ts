import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: Object;
  groupNames: Array<String> = [];
  inviteNames: Array<String> = [];
  userID;
  inviteIDs;
  groups = [];
  invites = [];

  constructor(private authService: AuthService, private router: Router, private flashMessage: FlashMessagesService) { }

  ngOnInit() {

    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
      this.userID = profile.user._id;
      this.groupNames = profile.groups;
      this.inviteNames = profile.invites;

      this.inviteIDs = profile.user.invites;
      if (profile.success) {
        for (var i = 0; i < profile.user.groups.length; i++) {
          const groupID = {
            groupID: profile.user.groups[i]
          }
          this.authService.getGroupPage(groupID).subscribe(data => {
            if (data.group !== undefined) {
              this.groups.push(data.group);
            }
          },
            err => {
              return false;
            });
        }
        if (i == profile.user.groups.length) {
          for (var i = 0; i < profile.user.invites.length; i++) {
            const groupID = {
              groupID: profile.user.invites[i]
            }
            this.authService.getGroupPage(groupID).subscribe(data => {
              if (data.group !== undefined) {
                this.invites.push(data.group);
              }
            },
              err => {
                return false;
              });
          }
        }
      }

    },
      err => {
        return false;
      });

  }

  accept(inviteObject, i) {

    //frontend

    this.groups.push(inviteObject)
    this.invites.splice(i, 1)


    //backend

    const acceptdeclineObject = {
      userID: this.userID,
      acceptdecline: 1,
      inviteID: inviteObject._id,
    }

    this.authService.inviteacceptdecline(acceptdeclineObject).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('You are now a member of this group!', { cssClass: 'alert-success', timeout: 3000 });
      } else {
        this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
      }
    });

  }

  decline(inviteObject, i) {

    //frontend

    this.invites.splice(i, 1)

    //backend

    const acceptdeclineObject = {
      userID: this.userID,
      acceptdecline: 0,
      inviteID: inviteObject._id
    }

    this.authService.inviteacceptdecline(acceptdeclineObject).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('You are now a member of this group!', { cssClass: 'alert-success', timeout: 3000 });
      } else {
        this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
      }
    });

  }

  leaveGroup(groupObject, i) {

    //frontend

    this.groups.splice(i, 1)

    //backend

    const leaveGroup = {
      userID: this.userID,
      groupID: groupObject._id
    }

    this.authService.leaveGroup(leaveGroup).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('You have successfully left the group.', { cssClass: 'alert-success', timeout: 3000 });
      } else {
        this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
      }
    });

  }

}
