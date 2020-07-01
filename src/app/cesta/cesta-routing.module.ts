import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CestaComponent } from './cesta.component';

const routes: Routes = [{ path: '', component: CestaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CestaRoutingModule { }
