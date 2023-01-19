import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayQuizzComponent } from './play-quizz.component';

describe('PlayQuizzComponent', () => {
  let component: PlayQuizzComponent;
  let fixture: ComponentFixture<PlayQuizzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayQuizzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayQuizzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
