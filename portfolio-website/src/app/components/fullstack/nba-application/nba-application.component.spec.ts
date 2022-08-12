import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaApplicationComponent } from './nba-application.component';

describe('NbaApplicationComponent', () => {
  let component: NbaApplicationComponent;
  let fixture: ComponentFixture<NbaApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbaApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NbaApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
