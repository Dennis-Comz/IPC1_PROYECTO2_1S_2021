import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/Services/backend.service';

@Component({
  selector: 'app-doctor-navbar',
  templateUrl: './doctor-navbar.component.html',
  styleUrls: ['./doctor-navbar.component.css']
})
export class DoctorNavbarComponent implements OnInit {

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
