import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CestaGestionComponent } from "./cesta-gestion/cesta-gestion.component";
import { CestaListaComponent} from "./cesta-lista/cesta-lista.component";
import { CestaValidacionComponent } from "./cesta-validacion/cesta-validacion.component";


const routes: Routes = [
  {
    path: "gestion/:accion/:id/:numAccion",
    component: CestaGestionComponent,
    outlet: "gestionCesta"
  }, {
    path: "lista/:numAccion",
    component: CestaListaComponent,
    outlet: "listaCesta"
  }, {
    path: "validacion",
    component: CestaValidacionComponent,
    outlet: "validacionCesta"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CestaRoutingModule { }
