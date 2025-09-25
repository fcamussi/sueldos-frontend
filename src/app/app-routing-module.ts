import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFound} from './pages/page-not-found/page-not-found';
import {EmpleadosHome} from './empleados/pages/empleados-home/empleados-home';
import {RecibosHome} from './recibos/pages/recibos-home/recibos-home';

const routes: Routes = [
  {
    path: 'recibos',
    component: RecibosHome,
  },
  {
    path: 'empleados',
    component: EmpleadosHome,
  },
  {
    path: '',
    redirectTo: 'recibos',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFound,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
