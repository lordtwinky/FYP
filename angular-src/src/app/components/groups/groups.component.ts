import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router'
import { CommonModule } from "@angular/common";


@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  name: string;
  admin: Object;
  groupNames;

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  this.getGroups();
  }

  onCreateGroup(){
    const group = {
      name: this.name,
      admin: this.admin
    }

    //Register user
    this.authService.createGroup(group).subscribe(data => {
      if(data.success){
        this.flashMessage.show('Group created successfully', {cssClass: 'alert-success', timeout: 3000});
       // this.router.navigate(['/Groups']);
      }else{
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
      //  this.router.navigate(['/register']);
      }
    });

  }

  getGroups(){
    this.authService.getallGroups().subscribe(data => {
      this.groupNames = data.groups; 
    });
  }

}
