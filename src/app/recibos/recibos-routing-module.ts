import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecibosHome} from './pages/recibos-home/recibos-home';
import {ReciboList} from './components/recibo-list/recibo-list';
import {ReciboAdd} from './components/recibo-add/recibo-add';
import {ReciboEdit} from './components/recibo-edit/recibo-edit';


const routes: Routes = [
  {
    path: 'recibos',
    component: RecibosHome,
    children: [
      {
        path: 'list',
        component: ReciboList
      },
      {
        path: 'add',
        component: ReciboAdd
      },
      {
        path: 'edit/:id',
        component: ReciboEdit
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
export class RecibosRoutingModule { }
