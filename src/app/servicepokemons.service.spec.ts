import { TestBed } from '@angular/core/testing';

import { ServicepokemonsService } from './servicepokemons.service';

describe('ServicepokemonsService', () => {
  let service: ServicepokemonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicepokemonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
