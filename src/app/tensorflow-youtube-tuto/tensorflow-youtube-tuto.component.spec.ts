import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TensorflowYoutubeTutoComponent } from './tensorflow-youtube-tuto.component';

describe('TensorflowYoutubeTutoComponent', () => {
  let component: TensorflowYoutubeTutoComponent;
  let fixture: ComponentFixture<TensorflowYoutubeTutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TensorflowYoutubeTutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TensorflowYoutubeTutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
