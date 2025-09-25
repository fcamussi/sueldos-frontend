import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecibosRoutingModule } from './recibos-routing-module';
import { RecibosHome } from './pages/recibos-home/recibos-home';


@NgModule({
  declarations: [
    RecibosHome,
  ],
  imports: [
    CommonModule,
    RecibosRoutingModule
  ]
})
export class RecibosModule { }
