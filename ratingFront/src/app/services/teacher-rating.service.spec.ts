import { TestBed } from '@angular/core/testing';

import { TeacherRatingService } from './teacher-rating.service';

describe('TeacherRatingService', () => {
  let service: TeacherRatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeacherRatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
