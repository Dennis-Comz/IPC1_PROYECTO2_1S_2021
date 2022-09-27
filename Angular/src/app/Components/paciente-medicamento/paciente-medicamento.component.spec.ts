import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteMedicamentoComponent } from './paciente-medicamento.component';

describe('PacienteMedicamentoComponent', () => {
  let component: PacienteMedicamentoComponent;
  let fixture: ComponentFixture<PacienteMedicamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacienteMedicamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
