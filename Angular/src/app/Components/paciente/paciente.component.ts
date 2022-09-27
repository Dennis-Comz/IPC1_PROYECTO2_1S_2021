import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/Services/backend.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  usuario:any;
  informacion:any = {
    username:'',
    fecha: '',
    hora: '',
    motivo: ''
  }
  constructor(private backend:BackendService) { }

  ngOnInit(): void {
    this.backend.configuracion().subscribe(
      res => {
        let value:any = res;
        this.usuario = value.results[0].username;
      }
    )
  }

  solicitar(){
    this.informacion.username = this.usuario;
    console.log(this.informacion);
    this.backend.generarCita(this.informacion).subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log(err)
      }
    )
  }

}
