import { TestBed, inject } from '@angular/core/testing';

import { HobbiesService } from './hobbies.service';

describe('HobbiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HobbiesService]
    });
  });

  it('should be created', inject([HobbiesService], (service: HobbiesService) => {
    expect(service).toBeTruthy();
  }));
});
