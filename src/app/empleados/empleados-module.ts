import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadosRoutingModule } from './empleados-routing-module';
import { EmpleadosHome } from './pages/empleados-home/empleados-home';
import { EmpleadoCard } from './components/empleado-card/empleado-card';
import { EmpleadoForm } from './components/empleado-form/empleado-form';
import { EmpleadoList } from './components/empleado-list/empleado-list';
import { Sidebar } from './components/sidebar/sidebar';
import { EmpleadoAdd } from './components/empleado-add/empleado-add';


@NgModule({
  declarations: [
    EmpleadosHome,
    EmpleadoCard,
    EmpleadoForm,
    EmpleadoList,
    Sidebar,
    EmpleadoAdd,
  ],
  imports: [
    CommonModule,
    EmpleadosRoutingModule
  ]
})
export class EmpleadosModule { }
