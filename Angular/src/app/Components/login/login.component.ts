import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/Services/backend.service'
import { Location } from '@angular/common'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


  usuario:any = {
    username:'',
    password: ''
  }

  constructor(private backend:BackendService, private location:Location, private router:Router) {}

  ngOnInit(): void {
  }
  
  ingresar(){
    this.backend.verificar(this.usuario)
    .subscribe(
      res => {
        let dir:any = res;
        if (dir.path == 'admin'){
          this.router.navigateByUrl("admin")
        }else if(dir.path == 'paciente'){
          this.router.navigateByUrl("paciente")
        }else if(dir.path == 'doctor'){
          this.router.navigateByUrl("doctor")
        }else if(dir.path == 'enfermera'){
          this.router.navigateByUrl("enfermera")
        }
        
      },
      err => {
        let msg:any = err;
        if (msg.dato == 'NO') {
          console.log('No Funciona')          
        }

      }
    )
    
  }
}
