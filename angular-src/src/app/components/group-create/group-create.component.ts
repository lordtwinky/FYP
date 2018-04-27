import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import {Router} from '@angular/router'

@Component({
  selector: 'app-group-create',
  templateUrl: './group-create.component.html',
  styleUrls: ['./group-create.component.css']
})
export class GroupCreateComponent implements OnInit {
  name: string;
  admin: Object;
  settings: Array<Object>;
  types: Array<Object>;
  fields: Array<Object>;
  fieldsSelected;
  organization;
  school;
  type;
  setting = 1;

  constructor(
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

    this.authService.getProfile().subscribe(profile => {
      this.admin = profile.user._id;
    },
    err => {
      return false;
    });
  }

  onCreateGroup() {
    
        const group = {
          name: this.name,
          admin: this.admin,
          setting: this.setting,
          school: this.school
        }
        if(this.name.trim() === "" || this.name == undefined){
          this.flashMessage.show('Please fill in the group name field', { cssClass: 'alert-danger', timeout: 3000 });
        }
        else{
          this.authService.createGroup(group).subscribe(data => {
            if (data.success) {
              this.flashMessage.show('Group created successfully', { cssClass: 'alert-success', timeout: 3000 });
              this.router.navigate(['/GroupPage', data.groupID]);
            } 
            
            else{
              this.flashMessage.show('The group name ' + name + ' has already been taken. Please try again with a new name.', { cssClass: 'alert-danger', timeout: 3000 });
            }
          });
        }
      }

}
