import { Component } from '@angular/core';
import {Empleado} from '../../../models/empleado';
import {Router} from '@angular/router';

@Component({
  selector: 'app-empleado-add',
  standalone: false,
  templateUrl: './empleado-add.html',
  styleUrl: './empleado-add.css'
})
export class EmpleadoAdd {

  constructor(private router: Router) {
  }

  onAgregar(empleado: Empleado) {
    console.log('Agregar empleado:', empleado);
    void this.router.navigate(['/empleados/list']);
  }

}
