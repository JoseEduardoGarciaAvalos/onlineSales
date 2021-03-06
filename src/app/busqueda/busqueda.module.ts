import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusquedaService } from "./busqueda.service"; //59.a

import { BusquedaRoutingModule } from './busqueda-routing.module';
import { BusquedaComponent } from './busqueda.component';
import { ParImparPipe } from './par-impar.pipe';
import { OrdenarPipe } from './ordenar.pipe';
import { ProductoKeywordComponent } from './producto-keyword/producto-keyword.component';
import { ProductoCriterioComponent } from './producto-criterio/producto-criterio.component';
import { ProductoListaComponent } from './producto-lista/producto-lista.component';


@NgModule({
  declarations: [BusquedaComponent, ParImparPipe, OrdenarPipe, ProductoKeywordComponent, ProductoCriterioComponent, ProductoListaComponent],
  imports: [
    CommonModule,
    BusquedaRoutingModule
  ],
  exports :[BusquedaComponent],
  providers: [BusquedaService]
})
export class BusquedaModule { }
/*
  //45.a  => exports[0]
  //59.a  => providers[0]
*/