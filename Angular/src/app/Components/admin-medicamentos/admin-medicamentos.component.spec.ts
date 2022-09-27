import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMedicamentosComponent } from './admin-medicamentos.component';

describe('AdminMedicamentosComponent', () => {
  let component: AdminMedicamentosComponent;
  let fixture: ComponentFixture<AdminMedicamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMedicamentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMedicamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
