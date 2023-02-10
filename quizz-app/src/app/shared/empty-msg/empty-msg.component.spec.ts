import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyMsgComponent } from './empty-msg.component';

describe('EmptyMsgComponent', () => {
  let component: EmptyMsgComponent;
  let fixture: ComponentFixture<EmptyMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyMsgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
