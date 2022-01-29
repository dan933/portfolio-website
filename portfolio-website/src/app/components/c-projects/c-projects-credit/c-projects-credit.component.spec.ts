import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CProjectsCreditComponent } from './c-projects-credit.component';

describe('CProjectsCreditComponent', () => {
  let component: CProjectsCreditComponent;
  let fixture: ComponentFixture<CProjectsCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CProjectsCreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CProjectsCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
