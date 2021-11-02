import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-projects-picture-filter',
  templateUrl: './c-projects-picture-filter.component.html',
  styleUrls: ['./c-projects-picture-filter.component.scss']
})
export class CProjectsPictureFilterComponent implements OnInit {
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
