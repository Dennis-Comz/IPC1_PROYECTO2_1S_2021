import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnferameraFacturaComponent } from './enferamera-factura.component';

describe('EnferameraFacturaComponent', () => {
  let component: EnferameraFacturaComponent;
  let fixture: ComponentFixture<EnferameraFacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnferameraFacturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnferameraFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
