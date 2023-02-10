import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from '../alumno';
import { AlumnoService } from '../alumno.service';

@Component({
  selector: 'app-actualizar-alumno',
  templateUrl: './actualizar-alumno.component.html',
  styleUrls: ['./actualizar-alumno.component.css']
})
export class ActualizarAlumnoComponent {
  id: number;
  alumno: Alumno;

  constructor(private alumnoServicio: AlumnoService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.alumno = new Alumno();
    this.alumnoServicio.getOneById(this.id).subscribe(date => {
      this.alumno = date;
    });
  }

  onSubmit() {
    console.log(this.alumno);
    this.actualizar();
  }

  actualizar() {
    this.alumnoServicio.update(this.id,this.alumno).subscribe(dato => {
      console.log(dato);
      this.irAlListado();
    }, error => console.log(error));
  }

  irAlListado(){
    this.router.navigate(['/alumnos']);
   }
}
