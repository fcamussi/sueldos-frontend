import { Injectable } from '@angular/core';
import {Empleado} from '../models/empleado';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoServiceMock {

  private empleados: Empleado[] = [
    { id: 1, nombre: 'Fernando', apellido: 'Camussi', precioHora: 3000 },
    { id: 2, nombre: 'Pepe', apellido: 'Pepe', precioHora: 1000 },
    { id: 3, nombre: 'Fernando', apellido: 'Camussi', precioHora: 3000 },
    { id: 4, nombre: 'Pepe', apellido: 'Pepe', precioHora: 1000 },
    { id: 5, nombre: 'Fernando', apellido: 'Camussi', precioHora: 3000 },
    { id: 6, nombre: 'Pepe', apellido: 'Pepe', precioHora: 1000 },
    { id: 7, nombre: 'Fernando', apellido: 'Camussi', precioHora: 3000 },
    { id: 8, nombre: 'Pepe', apellido: 'Pepe', precioHora: 1000 },
  ];

  constructor() { }

  getAll(): Observable<Empleado[]> {
    return of(this.empleados);
  }

  getById(id: number): Observable<Empleado> {
    const empleado = this.empleados.find(e => e.id === id);
    if (!empleado) throw new Error();
    return of(empleado);
  }

}
