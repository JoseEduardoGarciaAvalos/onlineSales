import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CestaRoutingModule } from './cesta-routing.module';
import { CestaComponent } from './cesta.component';


@NgModule({
  declarations: [CestaComponent],
  imports: [
    CommonModule,
    CestaRoutingModule
  ],
  exports: [CestaComponent]
})
export class CestaModule { }
