import { Component, OnInit } from '@angular/core';
import { AnonymousSubject } from 'rxjs/internal/Subject';

declare var crousel: any;

@Component({
  selector: 'app-crousel',
  templateUrl: './crousel.component.html',
  styleUrls: ['./crousel.component.css']
})
export class CrouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new crousel;
  }

}
