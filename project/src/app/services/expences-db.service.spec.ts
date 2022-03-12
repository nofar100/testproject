import { TestBed } from '@angular/core/testing';

import { ExpencesDBService } from './expences-db.service';

describe('ExpencesDBService', () => {
  let service: ExpencesDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpencesDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
