import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEnfermerasComponent } from './admin-enfermeras.component';

describe('AdminEnfermerasComponent', () => {
  let component: AdminEnfermerasComponent;
  let fixture: ComponentFixture<AdminEnfermerasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEnfermerasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEnfermerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
