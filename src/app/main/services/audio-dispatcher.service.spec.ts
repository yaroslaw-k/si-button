import { TestBed } from '@angular/core/testing';

import { AudioDispatcherService } from './audio-dispatcher.service';

describe('AudioDispatcherService', () => {
  let service: AudioDispatcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudioDispatcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
