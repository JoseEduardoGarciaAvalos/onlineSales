import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CestaRoutingModule } from './cesta-routing.module';
import { CestaComponent } from './cesta.component';
import { CestaService } from "./cesta.service";
import { CestaValidacionComponent } from './cesta-validacion/cesta-validacion.component';
import { CestaGestionComponent } from './cesta-gestion/cesta-gestion.component';
import { CestaListaComponent } from './cesta-lista/cesta-lista.component';


@NgModule({
  declarations: [CestaComponent, CestaValidacionComponent, CestaGestionComponent, CestaListaComponent],
  imports: [
    CommonModule,
    CestaRoutingModule
  ],
  exports: [CestaComponent],
  providers: [CestaService]
})
export class CestaModule { }
