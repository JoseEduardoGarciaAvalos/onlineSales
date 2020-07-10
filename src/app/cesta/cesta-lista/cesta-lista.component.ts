import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { AuthService } from '../../auth.service';
import { CestaService } from "../cesta.service";

@Component({
  selector: 'app-cesta-lista',
  templateUrl: './cesta-lista.component.html',
  styleUrls: ['./cesta-lista.component.css']
})
export class CestaListaComponent implements OnInit {

  private email: string;
  public productos: Object[];
  public total: number = 0;
  private numAccion: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private cestaService: CestaService
  ) {
    this.email = authService.cliente.email;
  }


  ngOnInit() {
    this.route.params.subscribe((parametros: Params) => {
      this.cestaService.getCestaProductos("productos/email=" + this.email).subscribe(
        res => {
          this.productos = res;
          this.total = 0;
          for (let p of res) {
            this.total += p.precio * p.nb;
          }
        },
        err => console.error(err),
        () => console.log('getCestaProductos bien'));
    });
  }

  insertarCestaProducto(productoId) {
    this.router.navigate(['/cesta', { outlets: { 'gestionCesta': ['gestion', 'insertar', productoId, this.numAccion] } }]);
    this.numAccion++;
  }

  removerCestaProducto(productoId) {
    this.router.navigate(['/cesta', { outlets: { 'gestionCesta': ['gestion', 'remover', productoId, this.numAccion] } }]);
    this.numAccion++;
  }

  cestaReset() {
    this.total = 0;
    this.cestaService.cestaReset(this.email).subscribe(
      res => {
        this.router.navigate(['/cesta', { outlets: { 'listaCesta': ['lista', -1] } }]);
      },
      err => console.error(err),
      () => console.log('Reset ok'));
  }

  cestaValidacion() {
    this.router.navigate(['/cesta', { outlets: { 'validacionCesta': ['validacion'] } }]);
  }

}
