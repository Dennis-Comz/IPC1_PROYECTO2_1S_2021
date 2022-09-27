import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPacientesComponent } from './admin-pacientes.component';

describe('AdminPacientesComponent', () => {
  let component: AdminPacientesComponent;
  let fixture: ComponentFixture<AdminPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPacientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
