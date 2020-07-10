import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductoListaComponent } from "./producto-lista/producto-lista.component";

const routes: Routes = [
  { 
    path: "criterio/:tipo/:marca/:minprecio/:maxprecio/:minpopularidad" , 
    component: ProductoListaComponent, 
    outlet: "listaBusqueda"
  },{ 
    path: "keywords/:terminos" , 
    component: ProductoListaComponent,
    outlet: "listaBusqueda"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusquedaRoutingModule { }
