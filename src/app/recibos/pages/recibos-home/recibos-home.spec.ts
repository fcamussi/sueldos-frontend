import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecibosHome } from './recibos-home';

describe('RecibosHome', () => {
  let component: RecibosHome;
  let fixture: ComponentFixture<RecibosHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecibosHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecibosHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
