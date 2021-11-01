import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RProjectsComponent } from './r-projects.component';

describe('RProjectsComponent', () => {
  let component: RProjectsComponent;
  let fixture: ComponentFixture<RProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
