import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CProjectsNavComponent } from './c-projects-nav.component';

describe('CProjectsNavComponent', () => {
  let component: CProjectsNavComponent;
  let fixture: ComponentFixture<CProjectsNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CProjectsNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CProjectsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
