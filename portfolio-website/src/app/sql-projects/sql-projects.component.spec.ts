import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlProjectsComponent } from './sql-projects.component';

describe('SqlProjectsComponent', () => {
  let component: SqlProjectsComponent;
  let fixture: ComponentFixture<SqlProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqlProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
