import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './navbar/navbar';
import { PageNotFound } from './pages/page-not-found/page-not-found';
import {EmpleadosModule} from './empleados/empleados-module';
import {RecibosModule} from './recibos/recibos-module';

@NgModule({
  declarations: [
    App,
    Navbar,
    PageNotFound
  ],
  imports: [
    BrowserModule,
    EmpleadosModule,
    RecibosModule,
    AppRoutingModule, /* conviene dejarlo último */
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
