import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //26.a
import { Observable } from 'rxjs';  //26.b
import { Cliente } from './cliente.model'; //26.d
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // 26.e
  isLogin: boolean = false;
  cliente: Cliente = Cliente.newCliente();

  constructor(private http: HttpClient) { } //26.c

  // 26.f
  autenticar(login: string, pass:string): Observable<any>{
    let url = "http://localhost:8888/auth/login="+login+"/password="+pass;
    return this.http.get(url);
  }
}
