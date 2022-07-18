import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-c-projects-picture-filter',
  templateUrl: './c-projects-picture-filter.component.html',
  styleUrls: ['./c-projects-picture-filter.component.scss']
})
export class CProjectsPictureFilterComponent implements OnInit {
  @ViewChild('matTabGroup', { static: true }) matTabGroup!: MatTabGroup;
  panelOpenState = false;

  constructor() { }

  setMatTabGroup() {
    let ntvEl = this.matTabGroup._elementRef.nativeElement;
    ntvEl.style.minHeight = ntvEl.clientHeight + 'px';
  }

  onMatTabChanged() {
    this.setMatTabGroup();
  }



  ngOnInit(): void {
  }

}
