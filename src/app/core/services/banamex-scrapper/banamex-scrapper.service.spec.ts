import { TestBed } from '@angular/core/testing';

import { BanamexScrapperService } from './banamex-scrapper.service';

describe('BanamexScrapperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BanamexScrapperService = TestBed.get(BanamexScrapperService);
    expect(service).toBeTruthy();
  });
});
