import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciboRow } from './recibo-row';

describe('ReciboRow', () => {
  let component: ReciboRow;
  let fixture: ComponentFixture<ReciboRow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReciboRow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReciboRow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
