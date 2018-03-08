import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router'
import { CommonModule } from "@angular/common";
import {FilterPipe} from '../../pipes/filter.pipe'


@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  name: string;
  admin: Object;
  groupNames;
  topics: Array<Object>;
  selectedId: number;
  groups
  groupNamese:Array<String>;

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private filter: FilterPipe
  ) { }
  

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.admin = profile.user._id;
      this.groupNamese = profile.groups;
    },
    err => {
      console.log(err);
      return false;
    });
  
    this.getGroups();

  }


  onCreateGroup() {

    
    const group = {
      name: this.name,
      admin: this.admin
    }

    this.authService.createGroup(group).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('Group created successfully', { cssClass: 'alert-success', timeout: 3000 });
      } else {
        this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
      }
    });

  }

  getGroups() {
    this.authService.getallGroups().subscribe(data => {
      this.groupNames = data.groups;
      
    });
    
  }

  

}
