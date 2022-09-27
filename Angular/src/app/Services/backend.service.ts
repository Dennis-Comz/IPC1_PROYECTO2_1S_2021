import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  constructor(private http: HttpClient) { }

  verificar(persona:any){
    return this.http.post(`http://13.58.12.93:5000/verificar`, persona);
  }

  cerrarSesion(){
    return this.http.get(`http://13.58.12.93:5000/cerrarSesion`);
  }

  configuracion(){
    return this.http.get(`http://13.58.12.93:5000/configuracion`);
  }
  
  registrarPaciente(paciente:any){
    return this.http.post(`http://13.58.12.93:5000/registrar`, paciente);
  }

  cargarPacientes(pacientes:any){
    return this.http.post( `http://13.58.12.93:5000/cargarPacientes`, pacientes);
  }
  
  cargarDoctores(doctores:any){
    return this.http.post( `http://13.58.12.93:5000/cargarDoctores`, doctores);
  }

  cargarEnfermeras(enfermeras:any){
    return this.http.post( `http://13.58.12.93:5000/cargarEnfermeras`, enfermeras);
  }

  cargarMedicamentos(medicamentos:any){
    return this.http.post( `http://13.58.12.93:5000/cargarMedicamentos`, medicamentos);
  }

  generarCita(datos:any){
    return this.http.post(`http://13.58.12.93:5000/cita`, datos);
  }

  postActualizar(value:any){
    return this.http.post(`http://13.58.12.93:5000/actualizar`, value);
  }

  extraerDatos(){return this.http.get(`http://13.58.12.93:5000/extraerDatos`);}
  // Get pacientes
  getCantidadPacientes(){return this.http.get(`http://13.58.12.93:5000/cantidadPacientes`);}
  getDataPacientes(){return this.http.get(`http://13.58.12.93:5000/datosPacientes`);}

  // Get Doctores
  getCantidadDoctores(){return this.http.get(`http://13.58.12.93:5000/cantidadDoctores`);}
  getDataDoctores(){return this.http.get(`http://13.58.12.93:5000/datosDoctores`);}

  // Get Enfermeras
  getCantidadEnfermeras(){return this.http.get(`http://13.58.12.93:5000/cantidadEnfermeras`);}
  getDataEnfermeras(){return this.http.get(`http://13.58.12.93:5000/datosEnfermeras`);}

  // Get Medicamentos
  getCantidadMedicamentos(){return this.http.get(`http://13.58.12.93:5000/cantidadMedicamentos`);}
  getDataMedicamentos(){return this.http.get(`http://13.58.12.93:5000/datosMedicamentos`);}

  //  Get Citas
  getCantidadCitas(){return this.http.get(`http://13.58.12.93:5000/cantidadCitas`);}
  getDataCitas(){return this.http.get(`http://13.58.12.93:5000/datosCitas`);}

  // Get citas aceptadas
  postCitasAceptadas(cita:any){return this.http.post(`http://13.58.12.93:5000/citasAceptadas`, cita);}
  getCitasAceptadas(){return this.http.get(`http://13.58.12.93:5000//aceptadas`);}
}