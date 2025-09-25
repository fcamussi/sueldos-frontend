import { TestBed } from '@angular/core/testing';

import { EmpleadoServiceMock } from './empleado-service-mock';

describe('EmpleadoServiceMock', () => {
  let service: EmpleadoServiceMock;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpleadoServiceMock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
