import { TestBed } from '@angular/core/testing';

import { CharServiceService } from './char-service.service';

describe('CharServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharServiceService = TestBed.get(CharServiceService);
    expect(service).toBeTruthy();
  });
});
