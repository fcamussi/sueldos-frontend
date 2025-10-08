import { Injectable } from '@angular/core';
import {Recibo} from '../models/recibo';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReciboServiceMock {

  private recibos: Recibo[] = [
    {
      id: 1,
      empleado: { id: 1, nombre: 'Juan', apellido: 'Perez', precioHora: 100 },
      jornadas: [
        { fecha: '2020/01/01', horaEntrada: '09:00', horaSalida: '18:00' },
        { fecha: '2020/01/02', horaEntrada: '09:00', horaSalida: '18:00' },
        { fecha: '2020/01/03', horaEntrada: '09:00', horaSalida: '18:00' }
      ]
    },
    {
      id: 2,
      empleado: { id: 2, nombre: 'María', apellido: 'Gonzalez', precioHora: 120 },
      jornadas: [
        { fecha: '2020/01/01', horaEntrada: '08:30', horaSalida: '17:30' },
        { fecha: '2020/01/02', horaEntrada: '08:30', horaSalida: '17:30' }
      ]
    },
    {
      id: 3,
      empleado: { id: 3, nombre: 'Carlos', apellido: 'Lopez', precioHora: 110 },
      jornadas: [
        { fecha: '2020/01/01', horaEntrada: '10:00', horaSalida: '19:00' },
        { fecha: '2020/01/02', horaEntrada: '10:00', horaSalida: '19:00' },
        { fecha: '2020/01/03', horaEntrada: '10:00', horaSalida: '19:00' },
        { fecha: '2020/01/04', horaEntrada: '10:00', horaSalida: '19:00' }
      ]
    }
  ];

  getAll(): Observable<Recibo[]> {
    return of(this.recibos);
  }

  getById(id: number): Observable<Recibo> {
    const recibo = this.recibos.find(e => e.id === id);
    if (!recibo) throw new Error();
    return of(recibo);
  }

}
