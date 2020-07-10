import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { BusquedaService } from "../busqueda.service";

@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.component.html',
  styleUrls: ['./producto-lista.component.css']
})
export class ProductoListaComponent implements OnInit {
  public productos :Object[] = [];

  constructor(private route: ActivatedRoute, private busquedaService:BusquedaService ) { }

  ngOnInit() {
    this.route.params.subscribe((parametros :Params) => {
         let ruta = "";
         if (parametros["tipo"] !== undefined) {
             ruta = "criterio/"+parametros['tipo']+"/"+parametros['marca']+"/"+parametros['minprecio']+"/"+parametros['maxprecio']+"/"+parametros['minpopularidad'];
         }
         else {
             ruta = "keywords?"+parametros["terminos"].split(" ").join("&");
         }

         this.busquedaService.getProductos(ruta)
             .subscribe(res => this.productos = res,
                        err => console.error(err),
                        () => console.log('getProductos (desde producto-lista) bien'));       
                    
         });
 }

}
