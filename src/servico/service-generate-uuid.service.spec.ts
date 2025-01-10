import { TestBed } from '@angular/core/testing';

import { ServiceGenerateUUIDService } from './service-generate-uuid.service';

describe('ServiceGenerateUUIDService', () => {
  let service: ServiceGenerateUUIDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceGenerateUUIDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
