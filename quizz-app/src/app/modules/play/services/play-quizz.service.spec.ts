import { TestBed } from '@angular/core/testing';

import { PlayQuizzService } from './play-quizz.service';

describe('PlayQuizzService', () => {
  let service: PlayQuizzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayQuizzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
