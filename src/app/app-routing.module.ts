import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth-guard.service'; //31.a

const routes: Routes = [
  { 
    path: 'busqueda', 
    loadChildren: () => import('./busqueda/busqueda.module').then(m => m.BusquedaModule) 
  }, { 
    path: 'cesta', 
    loadChildren: () => import('./cesta/cesta.module').then(m => m.CestaModule),
    canActivate: [AuthGuardService]
  }
];  //31.b

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
