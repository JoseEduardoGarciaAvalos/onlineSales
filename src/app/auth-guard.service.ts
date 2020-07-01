import { Injectable } from '@angular/core';
import { Router, CanActivate } from "@angular/router"; //29.a
import { AuthService } from './auth.service'; //29.b

@Injectable({
  providedIn: 'root'
})
                              //29.d
export class AuthGuardService implements CanActivate{

  constructor(public router: Router, public authService: AuthService) { } //29.c

   //29.d
  canActivate(): boolean{
    if(this.authService.isLogin) return true;
    this.router.navigate([{outlets: {'login': ['login']}}]);
    return false;
  }
}
