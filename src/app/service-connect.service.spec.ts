import { TestBed } from '@angular/core/testing';

import { ServiceConnectService } from './service-connect.service';

describe('ServiceConnectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceConnectService = TestBed.get(ServiceConnectService);
    expect(service).toBeTruthy();
  });
});
