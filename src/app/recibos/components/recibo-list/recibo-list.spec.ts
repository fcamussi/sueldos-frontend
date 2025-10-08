import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciboList } from './recibo-list';

describe('ReciboList', () => {
  let component: ReciboList;
  let fixture: ComponentFixture<ReciboList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReciboList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReciboList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
