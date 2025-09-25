import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecibosRoutingModule } from './recibos-routing-module';
import { Recibos } from './pages/recibos/recibos';


@NgModule({
  declarations: [
    Recibos
  ],
  imports: [
    CommonModule,
    RecibosRoutingModule
  ]
})
export class RecibosModule { }
