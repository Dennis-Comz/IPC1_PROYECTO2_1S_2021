import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/Services/backend.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  csvContent: string;
  parsedCsv: string[][];
  convertedObj:any = "";

  persona:any ={
    nombre:'',
    apellido:'',
  }
  constructor(private backend:BackendService) {}
  ngOnInit(): void {}
  
  convert(objArray:any, rol:string){
    this.convertedObj = JSON.stringify(objArray, null, 2);
    if(rol == 'paciente'){
      this.backend.cargarPacientes(objArray).subscribe(
        res=>{
          console.log(res)
        },
        err => {
          console.log(err)
        }
      );
    }else if(rol == 'doctores'){
      this.backend.cargarDoctores(objArray).subscribe(
        res=>{
          console.log(res)
        },
        err => {
          console.log(err)
        }
      );
    }else if(rol == 'enfermeras'){
      this.backend.cargarEnfermeras(objArray).subscribe(
        res=>{
          console.log(res)
        },
        err => {
          console.log(err)
        }
      );
    }else if(rol == 'medicamentos'){
      this.backend.cargarMedicamentos(objArray).subscribe(
        res=>{
          console.log(res)
        },
        err => {
          console.log(err)
        }
      );
    }
  }

  onError(err){
    this.convertedObj = err;
    console.log(err);
  }

  carga(){
    alert('Carga Realizada')
  }
}
