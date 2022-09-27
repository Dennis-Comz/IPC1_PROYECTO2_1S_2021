import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfermeraNavbarComponent } from './enfermera-navbar.component';

describe('EnfermeraNavbarComponent', () => {
  let component: EnfermeraNavbarComponent;
  let fixture: ComponentFixture<EnfermeraNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnfermeraNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfermeraNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
