import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecibosRoutingModule } from './recibos-routing-module';
import { RecibosHome } from './pages/recibos-home/recibos-home';
import { Sidebar } from './components/sidebar/sidebar';
import { ReciboAdd } from './components/recibo-add/recibo-add';
import { ReciboList } from './components/recibo-list/recibo-list';
import { ReciboEdit } from './components/recibo-edit/recibo-edit';
import { ReciboRow } from './components/recibo-row/recibo-row';


@NgModule({
  declarations: [
    RecibosHome,
    Sidebar,
    ReciboAdd,
    ReciboList,
    ReciboEdit,
    ReciboRow,
  ],
  imports: [
    CommonModule,
    RecibosRoutingModule
  ]
})
export class RecibosModule { }
