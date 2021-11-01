import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CProjectsPictureFilterComponent } from './c-projects-picture-filter.component';

describe('CProjectsPictureFilterComponent', () => {
  let component: CProjectsPictureFilterComponent;
  let fixture: ComponentFixture<CProjectsPictureFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CProjectsPictureFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CProjectsPictureFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
