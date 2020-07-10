import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-cesta-validacion',
  templateUrl: './cesta-validacion.component.html',
  styleUrls: ['./cesta-validacion.component.css']
})
export class CestaValidacionComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( (p) => { console.log("validación de la cesta")});
  }

}
