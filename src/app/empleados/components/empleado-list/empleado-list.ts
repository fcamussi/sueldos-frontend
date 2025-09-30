import {Component, OnInit} from '@angular/core';
import {Empleado} from '../../../models/empleado';
import {EmpleadoServiceMock} from '../../../services/empleado-service-mock';

@Component({
  selector: 'app-empleado-list',
  standalone: false,
  templateUrl: './empleado-list.html',
  styleUrl: './empleado-list.css'
})
export class EmpleadoList implements OnInit {

  empleados: Empleado[] = [];

  constructor(private empleadoServiceMock: EmpleadoServiceMock) {
  }

  ngOnInit() {
    this.empleadoServiceMock.listar().subscribe((empleados) => {
      this.empleados = empleados;
    });
  }

  onEditar(emp: Empleado) {
    console.log('Editar empleado:', emp);
  }

  onEliminar(emp: Empleado) {
    console.log('Eliminar empleado:', emp);
  }

}
