import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { BackendService } from 'src/app/Services/backend.service';

@Component({
  selector: 'app-enfermera',
  templateUrl: './enfermera.component.html',
  styleUrls: ['./enfermera.component.css']
})
export class EnfermeraComponent implements OnInit {

  tableDataSrc:any;
  tableData = [];
  tableDataDoctor = [];
  tableDataAceptada = [];
  iterador:any;
  cita:any = {
    No: '',
    Fecha:'',
    Hora:'',
    Motivo:'',
    Doctor:''
  }
  @ViewChild(MatSort, { static: true }) sort:MatSort;

  constructor(private backend:BackendService) { }

  ngOnInit(): void {
    this.backend.getDataCitas().subscribe(
      res=>{
        let data:any = res;
        for (let i = 0; i < data.results.length; i++) {
          this.tableData.push({
            'No': i + 1,
            'Fecha': data.results[i].fecha,
            'Hora': data.results[i].hora,
            'Motivo': data.results[i].motivo
          });
        }
      },
      err=>{
        console.log(err);
      }
    );
    this.backend.getDataDoctores().subscribe(
      res=>{
        let value:any = res;
        for (let i = 0; i < value.results.length; i++) {
          this.tableDataDoctor.push({
            'Doctor': value.results[i].name + ' ' + value.results[i].lastname
          });        
        }
        console.log(res);
      },
      err=>{
        console.log(err);
      }
    );
    this.backend.getCitasAceptadas().subscribe(
      res=>{
        let value:any = res;
        console.log(value)
        for (let i = 0; i < value.results.length; i++) {
          this.tableDataAceptada.push({
            'No': i + 1,
            'Fecha': value.results[i].fecha,
            'Hora': value.results[i].hora,
            'Doctor': value.results[i].doctor
          });
        }
      },
      err=>{
        console.log(err);
      }
    );
  }

  citaAceptada(value:any){
    for (let i = 0; i < this.tableData.length; i++) {
      if(this.tableData[i].No == value){
        this.cita.No = i;
        this.cita.Fecha = this.tableData[i].Fecha;
        this.cita.Hora = this.tableData[i].Hora;
        this.cita.Motivo = this.tableData[i].Motivo
        this.backend.postCitasAceptadas(this.cita).subscribe(
          res=>{
            console.log(res)
          },
          err=>{
            console.log(err)
          }
        );
        this.tableData.splice(i, 1);
      }      
    }
  }

  citaEliminida(value:any){
    for (let i = 0; i < this.tableData.length; i++) {
      if(this.tableData[i].No == value){
        this.tableData.splice(i, 1);
      }      
    }
  }
}
