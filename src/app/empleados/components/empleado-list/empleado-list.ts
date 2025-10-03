import {Component, OnInit} from '@angular/core';
import {Empleado} from '../../../models/empleado';
import {EmpleadoServiceMock} from '../../../services/empleado-service-mock';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

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
    const empleado = this.empleados.find(empleado  => empleado.id === id);
    const nombreApellido = empleado?.nombre + ' ' + empleado?.apellido;
    Swal.fire({
      title: '¿Estás seguro?',
      text: `Eliminar a ${nombreApellido}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      customClass: {
        confirmButton: 'btn btn-danger',
        cancelButton: 'btn btn-secondary'
      },
    }).then(result => {
      if (result.isConfirmed) {
        console.log('Eliminar empleado:', id);
      }
    });
  }

}
