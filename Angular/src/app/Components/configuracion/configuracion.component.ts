import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/Services/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {

  path:any;
  sesion:any = {
    nombre: '',
    apellido: '',
    usuario: '',
    password: '',
    fechaNac: ''
  }

  paciente:any = {
    nombre:'',
    apellido: '',
    usuario: '',
    password: '',
    fechaNac: '',
    oldUsuario: ''
  }

  enfermera:any = {
    nombre:'',
    apellido: '',
    usuario: '',
    password: '',
    fechaNac: '',
    oldUsuario: ''
  }

  doctor:any = {
    nombre:'',
    apellido: '',
    usuario: '',
    password: '',
    fechaNac: '',
    oldUsuario: ''
  }

  constructor(private backend:BackendService, private router: Router) { }

  ngOnInit(): void {
    this.path = this.router.url;
    this.backend.configuracion().subscribe(
      res=>{
        let data:any = res;
        this.sesion.nombre = data.results[0].name;
        this.sesion.apellido = data.results[0].lastname;
        this.sesion.usuario = data.results[0].username;
        this.sesion.password = data.results[0].password;
        this.sesion.fechaNac = data.results[0].birthday;
        console.log(res);
      },
      err =>{
        console.log(err)
      }
    )
  }

  actualizar(){
    if (this.path == '/paciente/configuracion') {
      this.paciente.oldUsuario = this.sesion.usuario;
      this.backend.postActualizar(this.paciente).subscribe(
        res=>{
          let val:any =res;
          alert(val.message);
          console.log(res);
        },
        err=>{
          console.log(err);
        }
      );
    }else if (this.path == '/enfermera/configuracion') {
      this.enfermera.oldUsuario = this.sesion.usuario;
      this.backend.postActualizar(this.enfermera).subscribe(
        res=>{
          let val:any =res;
          alert(val.message);
          console.log(res);
        },
        err=>{
          console.log(err);
        }
      );    
    }else if (this.path == '/doctor/configuracion') {
      this.doctor.oldUsuario = this.sesion.usuario;
      this.backend.postActualizar(this.doctor).subscribe(
        res=>{
          let val:any =res;
          alert(val.message);
          console.log(res);
        },
        err=>{
          console.log(err);
        }
      ); 
    }
  }

}
