import { TestBed } from '@angular/core/testing';

import { DialongService } from './dialong.service';

describe('DialongService', () => {
  let service: DialongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
