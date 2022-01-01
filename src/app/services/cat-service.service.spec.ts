/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CatServiceService } from './cat-service.service';

describe('Service: CatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatServiceService]
    });
  });

  it('should ...', inject([CatServiceService], (service: CatServiceService) => {
    expect(service).toBeTruthy();
  }));
});
