import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarAlumnoComponent } from './registrar-alumno/registrar-alumno.component';
import { FormsModule } from '@angular/forms';
import { ActualizarAlumnoComponent } from './actualizar-alumno/actualizar-alumno.component';
import { DetalleAlumnoComponent } from './detalle-alumno/detalle-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaAlumnosComponent,
    RegistrarAlumnoComponent,
    ActualizarAlumnoComponent,
    DetalleAlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
