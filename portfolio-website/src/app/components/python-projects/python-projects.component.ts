import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-python-projects',
  templateUrl: './python-projects.component.html',
  styleUrls: ['./python-projects.component.scss']
})
export class PythonProjectsComponent implements OnInit {
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
