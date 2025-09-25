import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Empleado} from '../models/empleado';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private apiUrl = 'http://localhost:8080/api/empleados';

  constructor(private http: HttpClient) { }

  listar(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.apiUrl);
  }

}
