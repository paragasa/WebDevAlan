import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  urls = {github: 'https://github.com/paragasa', linkedin: 'https://www.linkedin.com/in/alanparagas/'};
  constructor() { }

  ngOnInit() {

  }
  handleButton(name) {
    if(name in this.urls){
      
    }
  }
}
