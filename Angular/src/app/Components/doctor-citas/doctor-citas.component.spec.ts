import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorCitasComponent } from './doctor-citas.component';

describe('DoctorCitasComponent', () => {
  let component: DoctorCitasComponent;
  let fixture: ComponentFixture<DoctorCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorCitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
