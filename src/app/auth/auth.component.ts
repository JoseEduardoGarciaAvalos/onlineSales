import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service" //37a

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  //37c
  private login: string;
  private pass: string;

  constructor(public authService: AuthService) {} //37b

  ngOnInit() {
  }
  //37d
  onSubmit() {
    this.authService.isLogin = false;
    this.authService.autenticar(this.login, this.pass).subscribe(res => {
      let aux = res;
      if ( aux.length > 0 ) {
        this.authService.isLogin = true;
        this.authService.cliente.nombre = aux[0];
        this.authService.cliente.apellido = aux[1];
        this.authService.cliente.email = this.login;
      }
    });
  }

  desconectar() {
    this.authService.isLogin = false;
}

}
