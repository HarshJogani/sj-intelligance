import { Component, OnInit } from '@angular/core';

declare var fill: any;

@Component({
  selector: 'app-fillter',
  templateUrl: './fillter.component.html',
  styleUrls: ['./fillter.component.css','../../assets/css/fillter.css']
})
export class FillterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new fill();
  }

}
