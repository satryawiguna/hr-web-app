import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCompanyCategoryComponent } from './edit-company-category.component';

describe('EditCompanyCategoryComponent', () => {
  let component: EditCompanyCategoryComponent;
  let fixture: ComponentFixture<EditCompanyCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCompanyCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCompanyCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
