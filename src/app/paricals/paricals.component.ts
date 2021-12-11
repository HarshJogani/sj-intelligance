import { Component, OnInit } from '@angular/core';

declare var name: any;

@Component({
  selector: 'app-paricals',
  templateUrl: './paricals.component.html',
  styleUrls: ['./paricals.component.css']
})

export class ParicalsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new name();
  }

  title = 'app-js';
}
