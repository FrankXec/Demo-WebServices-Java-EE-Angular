import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlumnoService } from '../alumno.service';
import { Alumno } from './../alumno';

@Component({
  selector: 'app-registrar-alumno',
  templateUrl: './registrar-alumno.component.html',
  styleUrls: ['./registrar-alumno.component.css']
})
export class RegistrarAlumnoComponent {
 alumno: Alumno = new Alumno();

 constructor(private alumnoServicio:AlumnoService, private router:Router){

 }

 guardar(){
  this.alumnoServicio.save(this.alumno).subscribe(dato =>{
    console.log(dato);
    this.irAlListado();
  },error => console.log(error));
 }

 irAlListado(){
  this.router.navigate(['/alumnos']);
 }

 ngOnInit():void{
  
 }

 onSubmit(){
  console.log(this.alumno);
  this.guardar();
 }
}
