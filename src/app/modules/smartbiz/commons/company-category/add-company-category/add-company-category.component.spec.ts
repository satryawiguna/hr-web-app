import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompanyCategoryComponent } from './add-company-category.component';

describe('AddCompanyCategoryComponent', () => {
  let component: AddCompanyCategoryComponent;
  let fixture: ComponentFixture<AddCompanyCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCompanyCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCompanyCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
