import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/Services/backend.service'
import { Location } from '@angular/common'
import { Router } from '@angular/router'

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})

export class RegistrarseComponent implements OnInit {

  paciente:any = {
    name: '',
    lastname: '',
    birthday: '',
    gender: '',
    username: '',
    password: '',
    phone: 0
  }
  
  
  constructor(private backend: BackendService, private location:Location, private router:Router) { }

  ngOnInit(): void {
  }

  registrar(){
    console.log(this.paciente)
    this.backend.registrarPaciente(this.paciente)
    .subscribe(
      res => {
        console.log(res)
      },
      err => {
        console.log(err)
      }
    )
  }

  inicioSesion(){
    this.router.navigateByUrl("login")
  }
}
