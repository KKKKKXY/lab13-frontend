import { TestBed } from '@angular/core/testing';

import { JwtIterceptorServiceService } from './jwt-iterceptor-service.service';

describe('JwtIterceptorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JwtIterceptorServiceService = TestBed.get(JwtIterceptorServiceService);
    expect(service).toBeTruthy();
  });
});
