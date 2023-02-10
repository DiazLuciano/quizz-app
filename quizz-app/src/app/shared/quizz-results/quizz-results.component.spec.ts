import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzResultsComponent } from './quizz-results.component';

describe('QuizzResultsComponent', () => {
  let component: QuizzResultsComponent;
  let fixture: ComponentFixture<QuizzResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizzResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizzResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
