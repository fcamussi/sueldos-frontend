import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadosRoutingModule } from './empleados-routing-module';
import { EmpleadosHome } from './pages/empleados-home/empleados-home';
import { EmpleadoCard } from './components/empleado-card/empleado-card';
import { EmpleadoForm } from './components/empleado-form/empleado-form';
import { EmpleadoList } from './components/empleado-list/empleado-list';
import { Sidebar } from './components/sidebar/sidebar';
import { EmpleadoAdd } from './components/empleado-add/empleado-add';
import {ReactiveFormsModule} from '@angular/forms';
import { EmpleadoUpdate } from './components/empleado-edit/empleado-edit';


@NgModule({
  declarations: [
    EmpleadosHome,
    EmpleadoCard,
    EmpleadoForm,
    EmpleadoList,
    Sidebar,
    EmpleadoAdd,
    EmpleadoUpdate,
  ],
  imports: [
    CommonModule,
    EmpleadosRoutingModule,
    ReactiveFormsModule,
  ]
})
export class EmpleadosModule { }
