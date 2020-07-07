import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusquedaRoutingModule } from './busqueda-routing.module';
import { BusquedaComponent } from './busqueda.component';
import { ParImparPipe } from './par-impar.pipe';
import { OrdenarPipe } from './ordenar.pipe';


@NgModule({
  declarations: [BusquedaComponent, ParImparPipe, OrdenarPipe],
  imports: [
    CommonModule,
    BusquedaRoutingModule
  ],
  exports :[BusquedaComponent]
})
export class BusquedaModule { }
