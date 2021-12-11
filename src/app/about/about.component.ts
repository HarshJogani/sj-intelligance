import { Component, OnInit } from '@angular/core';
declare var animation2: any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css', '../../assets/css/about.css', '../../assets/css/about2.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new animation2()
  }

} 
