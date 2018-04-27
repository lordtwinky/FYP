import { Component, OnInit } from '@angular/core';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slide = 1;

  constructor() { }

  ngOnInit() {
    console.log(this.slide)
  }

  nextSlide(){
    if(this.slide == 3){
      this.slide = 1
    }
    else{
      this.slide++
    }
  }

  previousSlide(){
    if(this.slide == 1){
      this.slide = 3
    }
    else{
      this.slide--
    }
  }

}
