import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CProjectsRecoverComponent } from './c-projects-recover.component';

describe('CProjectsRecoverComponent', () => {
  let component: CProjectsRecoverComponent;
  let fixture: ComponentFixture<CProjectsRecoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CProjectsRecoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CProjectsRecoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
