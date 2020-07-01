import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'busqueda', loadChildren: () => import('./busqueda/busqueda.module').then(m => m.BusquedaModule) }, { path: 'cesta', loadChildren: () => import('./cesta/cesta.module').then(m => m.CestaModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
