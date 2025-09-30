import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Empleado} from '../../../models/empleado';

@Component({
  selector: 'app-empleado-card',
  standalone: false,
  templateUrl: './empleado-card.html',
  styleUrl: './empleado-card.css'
})
export class EmpleadoCard {

  @Input() empleado!: Empleado;
  @Output() editar = new EventEmitter<Empleado>();
  @Output() eliminar = new EventEmitter<Empleado>();

}
