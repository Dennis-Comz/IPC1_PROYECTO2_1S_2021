import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/Services/backend.service';

@Component({
  selector: 'app-paciente-navbar',
  templateUrl: './paciente-navbar.component.html',
  styleUrls: ['./paciente-navbar.component.css']
})
export class PacienteNavbarComponent implements OnInit {

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
