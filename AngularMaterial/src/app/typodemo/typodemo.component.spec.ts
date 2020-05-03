import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypodemoComponent } from './typodemo.component';

describe('TypodemoComponent', () => {
  let component: TypodemoComponent;
  let fixture: ComponentFixture<TypodemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypodemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypodemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
