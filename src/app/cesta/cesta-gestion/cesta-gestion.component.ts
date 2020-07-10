import { Component, OnInit } from '@angular/core';
import { CestaService } from "../cesta.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

import { AuthService } from '../../auth.service';
import { BusquedaService } from "../../busqueda/busqueda.service";

@Component({
  selector: 'app-cesta-gestion',
  templateUrl: './cesta-gestion.component.html',
  styleUrls: ['./cesta-gestion.component.css']
})
export class CestaGestionComponent implements OnInit {
  private email: string = "";
  public accion: string = "";
  public producto: any = [];
  private numAccion :number = 1;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cestaService: CestaService,
    private authService: AuthService,
    private busquedaService: BusquedaService,
  ) {
    this.email = authService.cliente.email;
  }

  ngOnInit() {
    this.route.params.subscribe((parametros: Params) => {
      this.cestaGestionProducto(parametros["accion"], parametros["id"]);
    });
  }

  cestaGestionProducto(accion, productId) {
    this.busquedaService.getProductoById(productId).subscribe(
      res => this.producto = res,
      err => console.error(err),
      () => console.log('getProductoById() bien'));
    if (accion == "insertar") this.accion = "insertar";
    if (accion == "remover") this.accion = "remover";
    this.cestaService.modificarCesta(accion, productId, this.email).subscribe(
      res => {
        this.router.navigate(['/cesta', { outlets: { 'listaCesta': ['lista', this.numAccion] } }]);
        this.numAccion++;
      },
      err => console.error(err),
      () => console.log('modificarCesta() bien'));
  }

}
