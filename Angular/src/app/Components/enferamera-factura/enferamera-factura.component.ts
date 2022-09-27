import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/Services/backend.service';

@Component({
  selector: 'app-enferamera-factura',
  templateUrl: './enferamera-factura.component.html',
  styleUrls: ['./enferamera-factura.component.css']
})
export class EnferameraFacturaComponent implements OnInit {

  constructor(private backend:BackendService) { }

  ngOnInit(): void {
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
