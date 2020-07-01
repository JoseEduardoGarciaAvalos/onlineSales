import { Injectable } from '@angular/core';
import { Router, CanActivate } from "@angular/router";
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(public router: Router, public authService: AuthService) { }

  canActivate(): boolean{
    if(this.authService.isLogin) return true;
    this.router.navigate([{outlets: {'login': ['login']}}]);
    return false;
  }
}
