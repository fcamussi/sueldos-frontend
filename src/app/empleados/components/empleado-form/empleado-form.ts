import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Empleado} from '../../../models/empleado';

@Component({
  selector: 'app-empleado-form',
  standalone: false,
  templateUrl: './empleado-form.html',
  styleUrl: './empleado-form.css'
})
export class EmpleadoForm implements OnInit {

  formEmpleado: FormGroup;
  @Input() empleado?: Empleado;
  @Output() guardar = new EventEmitter<Empleado>();

  constructor(private fb: FormBuilder) {
    this.formEmpleado = this.initForm();
  }

  private initForm(): FormGroup {
    return this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', [Validators.required]],
      precioHora: ['', [Validators.required, Validators.min(0.01)]]
    });
  }

  ngOnInit() {
    if (this.empleado) {
      this.formEmpleado.patchValue({
        nombre: this.empleado.nombre,
        apellido: this.empleado.apellido,
        precioHora: this.empleado.precioHora
      });
    }
  }

  get nombre() {
    return this.formEmpleado.get('nombre') as FormControl;
  }

  get apellido() {
    return this.formEmpleado.get('apellido') as FormControl;
  }

  get precioHora() {
    return this.formEmpleado.get('precioHora') as FormControl;
  }

  onSubmit() {
    if (this.formEmpleado.valid) {
      this.guardar.emit(this.formEmpleado.value as Empleado);
    }
  }

}
