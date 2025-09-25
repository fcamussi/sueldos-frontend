import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoCard } from './empleado-card';

describe('EmpleadoCard', () => {
  let component: EmpleadoCard;
  let fixture: ComponentFixture<EmpleadoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmpleadoCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadoCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
