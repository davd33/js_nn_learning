import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualNnComponent } from './manual-nn.component';

describe('ManualNnComponent', () => {
  let component: ManualNnComponent;
  let fixture: ComponentFixture<ManualNnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualNnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualNnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
