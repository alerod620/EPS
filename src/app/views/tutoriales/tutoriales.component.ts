import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutoriales',
  templateUrl: './tutoriales.component.html',
  styleUrls: ['./tutoriales.component.scss']
})
export class TutorialesComponent implements OnInit {

  items = [1, 2, 3, 4];

  constructor() { }

  ngOnInit(): void {
  }

}
