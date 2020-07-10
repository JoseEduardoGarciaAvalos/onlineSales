import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.css']
})
export class CestaComponent implements OnInit {

  constructor( 
    public authService :AuthService,  // --aot
    private router :Router 
  ) {}

  ngOnInit() {
  }

  mostrarCesta() {
    this.router.navigate(['/cesta', {outlets:{'listaCesta': ['lista', 0]}}]);
 }

}
