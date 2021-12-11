import { Component, OnInit } from '@angular/core';

// declare var scrollFunction: any;
declare var NavBar: any;
declare var animation: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css','../../assets/css/navbar.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // new scrollFunction();
    new NavBar();
    new animation();
  }
  title = 'app-js';
}
