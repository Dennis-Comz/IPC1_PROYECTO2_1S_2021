import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './Components/admin/admin.component';
import { AdminPacientesComponent } from './Components/admin-pacientes/admin-pacientes.component';
import { AdminDoctoresComponent } from './Components/admin-doctores/admin-doctores.component';
import { AdminEnfermerasComponent } from './Components/admin-enfermeras/admin-enfermeras.component';
import { AdminMedicamentosComponent } from './Components/admin-medicamentos/admin-medicamentos.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrarseComponent } from './Components/registrarse/registrarse.component';
import { PacienteComponent } from './Components/paciente/paciente.component';
import { DoctorComponent } from './Components/doctor/doctor.component';
import { EnfermeraComponent } from './Components/enfermera/enfermera.component';
import { PacienteMedicamentoComponent } from './Components/paciente-medicamento/paciente-medicamento.component';
import { EnferameraFacturaComponent } from './Components/enferamera-factura/enferamera-factura.component';
import { ConfiguracionComponent } from'./Components/configuracion/configuracion.component';
import { DoctorCitasComponent } from './Components/doctor-citas/doctor-citas.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  }, 
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'admin/pacientes',
    component: AdminPacientesComponent
  },
  {
    path: 'admin/doctores',
    component: AdminDoctoresComponent
  },
  {
    path: 'admin/enfermeras',
    component: AdminEnfermerasComponent
  },
  {
    path: 'admin/medicamentos',
    component: AdminMedicamentosComponent
  },
  {
    path: 'registro',
    component: RegistrarseComponent
  },
  {
    path: 'paciente',
    component: PacienteComponent
  },
  {
    path: 'paciente/compraMedicamento',
    component: PacienteMedicamentoComponent
  },
  {
    path: 'paciente/configuracion',
    component: ConfiguracionComponent
  },
  {
    path: 'doctor',
    component: DoctorComponent
  },
  {
    path: 'doctor/configuracion',
    component: ConfiguracionComponent
  },
  {
    path: 'doctor/citas',
    component: DoctorCitasComponent
  },
  {
    path: 'enfermera',
    component: EnfermeraComponent
  },
  {
    path: 'enfermera/facturas',
    component: EnferameraFacturaComponent
  },
  {
    path: 'enfermera/configuracion',
    component: ConfiguracionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
