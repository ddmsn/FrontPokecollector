import { TestBed } from '@angular/core/testing';

import { ServiceusersService } from './serviceusers.service';

describe('ServiceusersService', () => {
  let service: ServiceusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
