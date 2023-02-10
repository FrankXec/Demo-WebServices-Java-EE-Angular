import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from './alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  //url
  private baseURL = "http://localhost:8080/EscuelaWS/api/alumno";

  constructor(private HttpClient : HttpClient) { }

  getAll(): Observable<Alumno[]>{
    return this.HttpClient.get<Alumno[]>(`${this.baseURL}`);
  }

  getOneById(id:number):Observable<Alumno>{
    return this.HttpClient.get<Alumno>(`${this.baseURL}/${id}`);
  }

  //registarr
  save(alumno:Alumno):Observable<Object>{
    return this.HttpClient.post(`${this.baseURL}`,alumno);
  }

  update(id:number, alumno:Alumno):Observable<Object>{
    return this.HttpClient.put(`${this.baseURL}/${id}`,alumno);
  }

  delete(id:number):Observable<Object>{
    return this.HttpClient.delete(`${this.baseURL}/${id}`);
  }
}
