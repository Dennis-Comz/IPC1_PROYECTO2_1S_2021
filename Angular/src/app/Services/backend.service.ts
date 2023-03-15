import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  constructor(private http: HttpClient) { }

  verificar(persona:any){
    return this.http.post(`http://192.168.0.11:5000/login`, persona);
  }

  cerrarSesion(){
    return this.http.get(`http://192.168.0.11:5000/logout`);
  }

  configuracion(){
    return this.http.get(`http://192.168.0.11:5000/config`);
  }
  
  registrarPaciente(paciente:any){
    return this.http.post(`http://192.168.0.11:5000/add-patient`, paciente);
  }

  cargarPacientes(pacientes:any){
    return this.http.post( `http://192.168.0.11:5000/load-patients`, pacientes);
  }
  
  cargarDoctores(doctores:any){
    return this.http.post( `http://192.168.0.11:5000/load-doctors`, doctores);
  }

  cargarEnfermeras(enfermeras:any){
    return this.http.post( `http://192.168.0.11:5000/load-nurses`, enfermeras);
  }

  cargarMedicamentos(medicamentos:any){
    return this.http.post( `http://192.168.0.11:5000/load-medicines`, medicamentos);
  }

  generarCita(datos:any){
    return this.http.post(`http://192.168.0.11:5000/appointment`, datos);
  }

  postActualizar(value:any){
    return this.http.post(`http://192.168.0.11:5000/update`, value);
  }

  // Get pacientes
  getCantidadPacientes(){return this.http.get(`http://192.168.0.11:5000/patients-quantity`);}
  getDataPacientes(){return this.http.get(`http://192.168.0.11:5000/patients-data`);}

  // Get Doctores
  getCantidadDoctores(){return this.http.get(`http://192.168.0.11:5000/doctors-quantity`);}
  getDataDoctores(){return this.http.get(`http://192.168.0.11:5000/doctors-data`);}

  // Get Enfermeras
  getCantidadEnfermeras(){return this.http.get(`http://192.168.0.11:5000/nurses-quantity`);}
  getDataEnfermeras(){return this.http.get(`http://192.168.0.11:5000/nurses-data`);}

  // Get Medicamentos
  getCantidadMedicamentos(){return this.http.get(`http://192.168.0.11:5000/medicines-quantity`);}
  getDataMedicamentos(){return this.http.get(`http://192.168.0.11:5000/medicines-data`);}

  //  Get Citas
  getCantidadCitas(){return this.http.get(`http://192.168.0.11:5000/appointments-quantity`);}
  getDataCitas(){return this.http.get(`http://192.168.0.11:5000/appointments-data`);}

  // Get citas aceptadas
  postCitasAceptadas(cita:any){return this.http.post(`http://192.168.0.11:5000/accept-appointment`, cita);}
  getCitasAceptadas(){return this.http.get(`http://192.168.0.11:5000/appointments-accepted`);}
}