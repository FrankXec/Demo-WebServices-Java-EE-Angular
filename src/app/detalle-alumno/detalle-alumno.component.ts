import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alumno } from '../alumno';
import { AlumnoService } from '../alumno.service';

@Component({
  selector: 'app-detalle-alumno',
  templateUrl: './detalle-alumno.component.html',
  styleUrls: ['./detalle-alumno.component.css']
})
export class DetalleAlumnoComponent {
  id:number;
  alumno:Alumno;
  
  constructor(private alumnoServicio:AlumnoService, private route:ActivatedRoute){}

  ngOnInit():void{
    this.id = this.route.snapshot.params['id'];
    this.alumno = new Alumno();
    this.alumnoServicio.getOneById(this.id).subscribe(dato => {
      this.alumno = dato;
      console.log(dato);
    });
  }
}
