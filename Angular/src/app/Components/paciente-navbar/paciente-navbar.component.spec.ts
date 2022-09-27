import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteNavbarComponent } from './paciente-navbar.component';

describe('PacienteNavbarComponent', () => {
  let component: PacienteNavbarComponent;
  let fixture: ComponentFixture<PacienteNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacienteNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
