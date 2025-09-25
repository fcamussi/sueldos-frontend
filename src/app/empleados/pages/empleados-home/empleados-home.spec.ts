import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosHome } from './empleados-home';

describe('EmpleadosHome', () => {
  let component: EmpleadosHome;
  let fixture: ComponentFixture<EmpleadosHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmpleadosHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadosHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
