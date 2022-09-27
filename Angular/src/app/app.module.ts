import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { LoginComponent } from './Components/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrarseComponent } from './Components/registrarse/registrarse.component';
import { PacienteComponent } from './Components/paciente/paciente.component';
import { AdminComponent } from './Components/admin/admin.component';
import {NgxCSVtoJSONModule} from 'ngx-csvto-json';
import { AdminPacientesComponent } from './Components/admin-pacientes/admin-pacientes.component';
import { AdminDoctoresComponent } from './Components/admin-doctores/admin-doctores.component';
import { AdminEnfermerasComponent } from './Components/admin-enfermeras/admin-enfermeras.component';
import { AdminNavbarComponent } from './Components/admin-navbar/admin-navbar.component';
import { MatTableModule } from '@angular/material/table';
import { AdminMedicamentosComponent } from './Components/admin-medicamentos/admin-medicamentos.component';
import { EnfermeraComponent } from './Components/enfermera/enfermera.component';
import { DoctorComponent } from './Components/doctor/doctor.component';
import { PacienteMedicamentoComponent } from './Components/paciente-medicamento/paciente-medicamento.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatCardModule} from '@angular/material/card';
import { EnferameraFacturaComponent } from './Components/enferamera-factura/enferamera-factura.component';
import { ConfiguracionComponent } from './Components/configuracion/configuracion.component';
import { PacienteNavbarComponent } from './Components/paciente-navbar/paciente-navbar.component';
import { DoctorNavbarComponent } from './Components/doctor-navbar/doctor-navbar.component';
import { EnfermeraNavbarComponent } from './Components/enfermera-navbar/enfermera-navbar.component';
import { DoctorCitasComponent } from './Components/doctor-citas/doctor-citas.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    NavbarComponent,
    RegistrarseComponent,
    PacienteComponent,
    AdminComponent,
    AdminPacientesComponent,
    AdminDoctoresComponent,
    AdminEnfermerasComponent,
    AdminNavbarComponent,
    AdminMedicamentosComponent,
    EnfermeraComponent,
    DoctorComponent,
    PacienteMedicamentoComponent,
    EnferameraFacturaComponent,
    ConfiguracionComponent,
    PacienteNavbarComponent,
    DoctorNavbarComponent,
    EnfermeraNavbarComponent,
    DoctorCitasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxCSVtoJSONModule,
    MatTableModule,
    MDBBootstrapModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
