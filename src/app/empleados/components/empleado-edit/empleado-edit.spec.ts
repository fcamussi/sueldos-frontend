import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoUpdate } from './empleado-edit';

describe('EmpleadoEdit', () => {
  let component: EmpleadoUpdate;
  let fixture: ComponentFixture<EmpleadoUpdate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmpleadoUpdate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadoUpdate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
