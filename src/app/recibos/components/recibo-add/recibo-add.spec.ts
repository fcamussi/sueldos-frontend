import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciboAdd } from './recibo-add';

describe('ReciboAdd', () => {
  let component: ReciboAdd;
  let fixture: ComponentFixture<ReciboAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReciboAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReciboAdd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
