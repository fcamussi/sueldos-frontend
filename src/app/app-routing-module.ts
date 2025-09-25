import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Recibos} from './recibos/pages/recibos/recibos';
import {Empleados} from './empleados/pages/empleados/empleados';
import {PageNotFound} from './pages/page-not-found/page-not-found';

const routes: Routes = [
  {
    path: 'recibos',
    component: Recibos,
  },
  {
    path: 'empleados',
    component: Empleados,
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
