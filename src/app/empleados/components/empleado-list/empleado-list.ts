import {Component, OnInit} from '@angular/core';
import {Empleado} from '../../../models/empleado';
import {EmpleadoServiceMock} from '../../../services/empleado-service-mock';
import {Router} from '@angular/router';

@Component({
  selector: 'app-empleado-list',
  standalone: false,
  templateUrl: './empleado-list.html',
  styleUrl: './empleado-list.css'
})
export class EmpleadoList implements OnInit {

  empleados: Empleado[] = [];

  constructor(private empleadoServiceMock: EmpleadoServiceMock,
              private router: Router) {
  }

  ngOnInit() {
    this.empleadoServiceMock.getAll().subscribe(empleados => {
      this.empleados = empleados;
    });
  }

  onEditar(id: number) {
    void this.router.navigate(['/empleados/edit', id]);
  }

  onEliminar(id: number) {
    console.log('Eliminar empleado:', id);
  }

}
