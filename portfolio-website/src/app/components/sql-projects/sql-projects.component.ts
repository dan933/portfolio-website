import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sql-projects',
  templateUrl: './sql-projects.component.html',
  styleUrls: ['./sql-projects.component.scss']
})
export class SqlProjectsComponent implements OnInit {
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
