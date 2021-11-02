import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CProjectsSpellerComponent } from './c-projects-speller.component';

describe('CProjectsSpellerComponent', () => {
  let component: CProjectsSpellerComponent;
  let fixture: ComponentFixture<CProjectsSpellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CProjectsSpellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CProjectsSpellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
