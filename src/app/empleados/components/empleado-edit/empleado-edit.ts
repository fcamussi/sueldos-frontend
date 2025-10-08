import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EmpleadoServiceMock} from '../../../services/empleado-service-mock';
import {Empleado} from '../../../models/empleado';

@Component({
  selector: 'app-empleado-edit',
  standalone: false,
  templateUrl: './empleado-edit.html',
  styleUrl: './empleado-edit.css'
})
export class EmpleadoEdit implements OnInit {

  @Input() id!: number;
  empleado!: Empleado;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private empleadoServiceMock: EmpleadoServiceMock) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = Number(params['id']);
      this.empleadoServiceMock.getById(this.id).subscribe(empleado => {
        this.empleado = empleado;
      });
    });
  }

  onEditar(empleado: Empleado) {
    console.log('Actualizar empleado:', {...empleado, id: this.id});
    void this.router.navigate(['/empleados/list']);
  }

}
