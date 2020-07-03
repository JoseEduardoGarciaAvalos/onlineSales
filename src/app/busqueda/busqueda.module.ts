import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusquedaRoutingModule } from './busqueda-routing.module';
import { BusquedaComponent } from './busqueda.component';


@NgModule({
  declarations: [BusquedaComponent],
  imports: [
    CommonModule,
    BusquedaRoutingModule
  ],
  exports :[BusquedaComponent]
})
export class BusquedaModule { }
