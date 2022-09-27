import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { BackendService } from 'src/app/Services/backend.service';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-admin-doctores',
  templateUrl: './admin-doctores.component.html',
  styleUrls: ['./admin-doctores.component.css']
})
export class AdminDoctoresComponent implements OnInit {

  tableDataSrc:any;
  tableCols:string[] = ['No','Nombre','Apellido','Especialidad', 'Opciones'];
  tableData = [];
  iterador:any;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private backend:BackendService) { }

  ngOnInit(): void {
    this.backend.getDataDoctores().subscribe(
      res=>{
        let data:any = res;
        for (let i = 0; i < data.results.length; i++) {
          this.tableData.push({
            'No': i+1,
            'Nombre': data.results[i].name,
            'Apellido': data.results[i].lastname,
            'Especialidad': data.results[i].especialidad
          });
        }
      },
      err=>{
        console.log(err)
      }
    );
  }
  
  @ViewChild('content', { static: false}) el!: ElementRef;

  SavePDF(){
    let pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(this.el.nativeElement, {
      callback: (pdf)=>{
        pdf.save("doctores.pdf");
      }
    });    
  }
}
