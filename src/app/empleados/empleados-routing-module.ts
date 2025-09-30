import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmpleadosHome} from './pages/empleados-home/empleados-home';
import {EmpleadoList} from './components/empleado-list/empleado-list';
import {EmpleadoAdd} from './components/empleado-add/empleado-add';


const routes: Routes = [
  {
    path: 'empleados',
    component: EmpleadosHome,
    children: [
      {
        path: 'list',
        component: EmpleadoList
      },
      {
        path: 'add',
        component: EmpleadoAdd
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadosRoutingModule { }
