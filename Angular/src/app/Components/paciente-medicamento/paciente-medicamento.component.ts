import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/Services/backend.service';

@Component({
  selector: 'app-paciente-medicamento',
  templateUrl: './paciente-medicamento.component.html',
  styleUrls: ['./paciente-medicamento.component.css']
})
export class PacienteMedicamentoComponent implements OnInit {

  cardsData = [];
  iterador:any;

  constructor(private backend:BackendService) { }

  ngOnInit(): void {
    this.backend.getCantidadMedicamentos().subscribe(
      res => {
        let val:any = res;
        this.iterador = val.cantidad;
      },
      err => {
        console.log(err);
      }
    );
    this.backend.getDataMedicamentos().subscribe(
      res=>{
        let data:any = res;
        for (let i = 0; i < this.iterador; i++) {
          this.cardsData.push({
            'nombre': data.results[i].name, 
            'precio': data.results[i].price, 
            'descripcion': data.results[i].description
          });
        }

      },
      err =>{
        console.log(err)
      }
    );
  }
  cerrarSesion(){
    this.backend.cerrarSesion().subscribe(
      res =>{
        console.log(res);
      },
      err =>{
        console.log(err);
      }
    );
  }

}
