import { TestBed } from '@angular/core/testing';

import { SqlDbService } from './sql-db.service';

describe('SqlDbService', () => {
  let service: SqlDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SqlDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
