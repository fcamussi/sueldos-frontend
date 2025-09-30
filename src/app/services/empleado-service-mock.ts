import { Injectable } from '@angular/core';
import {Empleado} from '../models/empleado';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoServiceMock {

  private empleadosMock: Empleado[] = [
    { id: 1, nombre: 'Fernando', apellido: 'Camussi', precioHora: 3000 },
    { id: 2, nombre: 'Pepe', apellido: 'Pepe', precioHora: 1000 },
    { id: 1, nombre: 'Fernando', apellido: 'Camussi', precioHora: 3000 },
    { id: 2, nombre: 'Pepe', apellido: 'Pepe', precioHora: 1000 },
    { id: 1, nombre: 'Fernando', apellido: 'Camussi', precioHora: 3000 },
    { id: 2, nombre: 'Pepe', apellido: 'Pepe', precioHora: 1000 },
    { id: 1, nombre: 'Fernando', apellido: 'Camussi', precioHora: 3000 },
    { id: 2, nombre: 'Pepe', apellido: 'Pepe', precioHora: 1000 },
  ];

  constructor() { }

  listar(): Observable<Empleado[]> {
    return of(this.empleadosMock);
  }

}
