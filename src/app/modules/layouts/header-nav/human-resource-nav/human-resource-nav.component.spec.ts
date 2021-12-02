import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HumanResourceNavComponent } from './human-resource-nav.component';


describe('HumanResourceNavComponent', () => {
  let component: HumanResourceNavComponent;
  let fixture: ComponentFixture<HumanResourceNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HumanResourceNavComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanResourceNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
