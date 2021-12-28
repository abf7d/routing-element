import { TestBed } from '@angular/core/testing';

import { CompLibService } from './comp-lib.service';

describe('CompLibService', () => {
  let service: CompLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
