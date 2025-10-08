import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciboEdit } from './recibo-edit';

describe('ReciboEdit', () => {
  let component: ReciboEdit;
  let fixture: ComponentFixture<ReciboEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReciboEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReciboEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
