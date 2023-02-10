import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarAlumnoComponent } from './actualizar-alumno/actualizar-alumno.component';
import { DetalleAlumnoComponent } from './detalle-alumno/detalle-alumno.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { RegistrarAlumnoComponent } from './registrar-alumno/registrar-alumno.component';

const routes: Routes = [
  {path:'alumnos',component:ListaAlumnosComponent},
  {path:'',redirectTo:'alumnos',pathMatch:'full'},
  {path:'registrar',component:RegistrarAlumnoComponent},
  {path:'actualizar/:id',component:ActualizarAlumnoComponent},
  {path:'detalle/:id',component:DetalleAlumnoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
