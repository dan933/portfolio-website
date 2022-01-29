import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CProjectsSubstitutionComponent } from './c-projects-substitution.component';

describe('CProjectsSubstitutionComponent', () => {
  let component: CProjectsSubstitutionComponent;
  let fixture: ComponentFixture<CProjectsSubstitutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CProjectsSubstitutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CProjectsSubstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
