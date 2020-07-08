import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-keyword',
  templateUrl: './producto-keyword.component.html',
  styleUrls: ['./producto-keyword.component.css']
})
export class ProductoKeywordComponent implements OnInit {

  constructor(private routher:Router) { }

  ngOnInit() {
  }

  productoSeleccion(terminos:string):void {
    this.routher.navigate(["/busqueda", { outlets: { "listaBusqueda": ["keywords", terminos]} }]);
    /*
      Semgento de ruta   Declarada en
      /busqueda         = app-routing.module.ts     path: "/busqueda"   (absoluta)  rootModule
      ListaBusqueda     = app.component.html        <router-outlet name="listaBusqueda"></router-outlet>
      keywords          = busqueda-routing.module.ts  path: "keywords"  (relativa)  featureModule

      /busqueda/(listaBusqueda:keywords/terminos)
    */
  }

}
