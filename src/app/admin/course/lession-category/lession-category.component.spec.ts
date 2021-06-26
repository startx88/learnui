import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessionCategoryComponent } from './lession-category.component';

describe('LessionCategoryComponent', () => {
  let component: LessionCategoryComponent;
  let fixture: ComponentFixture<LessionCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessionCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessionCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
