import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/Services/backend.service';

@Component({
  selector: 'app-enfermera-navbar',
  templateUrl: './enfermera-navbar.component.html',
  styleUrls: ['./enfermera-navbar.component.css']
})
export class EnfermeraNavbarComponent implements OnInit {

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
