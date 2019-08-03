import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  navbar: any;
  constructor() { }

  ngOnInit() {
    this.navbar = true;
  }
  toggleNav() {
    this.navbar = !this.navbar;
  }

}
