import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from '../alumno';
import { AlumnoService } from '../alumno.service';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent {
  alumnos:Alumno[];

  constructor(private empleadoServicio:AlumnoService, private router:Router){}

  ngOnInit(): void {
    this.getAlumnos();
  }

  getAlumnos(){
    this.empleadoServicio.getAll().subscribe(dato => {
      this.alumnos = dato;
    });
  }

  updateAlumno(id:number){
    this.router.navigate(['./actualizar',id]);
  }

  deleteAlumno(id:number){
    this.empleadoServicio.delete(id).subscribe(dato =>{
      console.log(dato);
      this.ngOnInit();
    });
  }

  detalle(id:number){
    this.router.navigate(['/detalle',id]);
  }

  irAlListado(){
    this.router.navigate(['/alumnos']);
   }
}