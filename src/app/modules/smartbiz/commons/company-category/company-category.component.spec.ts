import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCategoryComponent } from './company-category.component';

describe('CompanyCategoryComponent', () => {
  let component: CompanyCategoryComponent;
  let fixture: ComponentFixture<CompanyCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
