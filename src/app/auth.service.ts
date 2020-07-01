import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './cliente.model';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin: boolean = false;
  cliente: Cliente = Cliente.newCliente();

  constructor(private http: HttpClient) { }

  autenticar(login: string, pass:string): Observable<any>{
    let url = "http://localhost:8888/auth/login="+login+"/password="+pass;
    return this.http.get(url);
  }
}
