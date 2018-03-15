import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

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
  setting;

  constructor(
    private flashMessage: FlashMessagesService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.settings = []
    const setting1 = {id:1, title:"Global", description:"Any user will be allowed to join, view and add to the group"};
    const setting2 = {id:2, title:"Private", description:"New users may only join by first having been invited to the group by the admin."};
    this.settings.push(setting1, setting2)

    this.types = []
    const type1 = {id:1, name:"School", description:"The group is used by a school, university, college, etc."};
    const type2 = {id:2, name:"Work", description:"The group is used by an organization, firm, corporation, etc. "};
    const type3 = {id:3, name:"Self-learning", description:"The context of the group does not include a school or workplace."};
    const type4 = {id:4, name:"Other", description:"The primary objective or context of the group fall outside of the previous options"};
    this.types.push(type1, type2, type3, type4)

    this.fields = []
    const field1 = {id:1, name:"Biology"};
    const field2 = {id:2, name:"Chemistry"};
    const field3 = {id:3, name:"Commerce"};
    const field4 = {id:4, name:"Computer science"};
    const field5 = {id:5, name:"Geography"};
    const field6 = {id:6, name:"History"};
    const field7 = {id:7, name:"Law"};
    const field8 = {id:8, name:"Linguistics"};
    const field9 = {id:9, name:"Literature"};
    const field10 = {id:10, name:"Mathematics"};
    const field11 = {id:11, name:"Physics"};
    const field12 = {id:12, name:"Psychology"};
    const field13 = {id:13, name:"Religion"};
    const field14 = {id:14, name:"Science"};
    const field15 = {id:15, name:"Sociology"};
    this.fields.push(field1, field2, field3, field4, field5, field6, field7, field8, field9, field10, field11, field12, field13, field14, field15)


    this.authService.getProfile().subscribe(profile => {
      this.admin = profile.user._id;
    },
    err => {
      console.log(err);
      return false;
    });
  }

  onCreateGroup() {
    
        const group = {
          name: this.name,
          admin: this.admin,
          setting: this.setting,
          type: this.type,
          school: this.school,
          organization: this.organization,
          fields: this.fieldsSelected,

        }
    
        this.authService.createGroup(group).subscribe(data => {
          if (data.success) {
            this.flashMessage.show('Group created successfully', { cssClass: 'alert-success', timeout: 3000 });
          } else {
            this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
          }
        });
    
      }

}
