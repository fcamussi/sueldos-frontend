import { TestBed } from '@angular/core/testing';

import { ReciboServiceMock } from './recibo-service-mock';

describe('ReciboServiceMock', () => {
  let service: ReciboServiceMock;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReciboServiceMock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
