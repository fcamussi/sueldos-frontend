import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoAdd } from './empleado-add';

describe('EmpleadoAdd', () => {
  let component: EmpleadoAdd;
  let fixture: ComponentFixture<EmpleadoAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmpleadoAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadoAdd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
