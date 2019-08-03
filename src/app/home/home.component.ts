import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  @ViewChild('skillDisplay', {static: false}) skillsPos: ElementRef;
  scrollPosition: any;
  skills_state = 'hide';

  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', [])
    checkScroll() {
      this.scrollPosition = window.pageYOffset;


      const skillsAt = this.skillsPos.nativeElement.getBoundingClientRect().top;
      // console.log(this.skillsPos.nativeElement.getBoundingClientRect().y);
      this.triggerSkills(skillsAt);


    }


  ngOnInit() {
  }

  triggerSkills(pos) {
    if ( pos > -270 && pos < 300) {
      this.skills_state = 'show';
    } else {
      this.skills_state = 'hide';
    }
  }
}
