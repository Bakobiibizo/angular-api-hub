import { TestBed } from '@angular/core/testing';

import { VectorstoreService } from './vectorstore.service';

describe('VectorstoreService', () => {
  let service: VectorstoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VectorstoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
