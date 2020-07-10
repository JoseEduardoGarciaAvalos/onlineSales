import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { BusquedaService } from "../busqueda.service";

@Component({
  selector: 'app-producto-criterio',
  templateUrl: './producto-criterio.component.html',
  styleUrls: ['./producto-criterio.component.css']
})
export class ProductoCriterioComponent implements OnInit {
  public selectores: Object[] = [];  // --aot
  private parametros: any = { "tipo": "*", "marca": "*", "minprecio": "*", "maxprecio": "*", "popularidad": "*" };

  constructor(private router: Router, private busquedaService: BusquedaService) { }

  ngOnInit() {
    this.busquedaService.getProductos("selectores")
      .subscribe(res => this.selectores = res,  //La respuesta
        err => console.error('getProductos("selectores")' + err), //Hay error
        () => console.log('getProductos("selectores") bien'));   //No hay error
  }

  seleccion($event, selector) {
    let etiqueta = $event.target;
    let texto = etiqueta.options[etiqueta.selectedIndex].text;

    if (selector == texto) {
      if (selector == "precio") {
        this.parametros["minprecio"] = "*";
        this.parametros["maxprecio"] = "*";
      }
      else this.parametros[selector] = "*";
      etiqueta.style.backgroundColor = "#F5F3F3";
    }
    else {
      if (selector == "precio") {
        let precio = /(.+) - (.+)/.exec(texto);
        this.parametros["minprecio"] = precio[1];
        this.parametros["maxprecio"] = precio[2];
      }
      else this.parametros[selector] = texto;
      etiqueta.style.backgroundColor = "yellow";
    }
    console.dir(this.parametros);
  }

  productoSeleccion() {
    this.router.navigate(['/busqueda', {
      outlets: {
        'listaBusqueda': [
          'criterio',
          this.parametros.tipo,
          this.parametros.marca,
          this.parametros.minprecio,
          this.parametros.maxprecio,
          this.parametros.popularidad
        ]
      }
    }]);
  }

}
