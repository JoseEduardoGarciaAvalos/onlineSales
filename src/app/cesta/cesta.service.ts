import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs"

@Injectable()
export class CestaService {

  constructor(private http: HttpClient) { }

  getCestaProductos(parametros: string): Observable<any> {
    let url: string = "http://localhost:8888/CestaProductos/" + parametros;
    return this.http.get(url);
  }

  modificarCesta(accion: string, productoId: string, email: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    let observable: Observable<any>;
    if (accion == "insertar") {
      observable = this.http.post("http://localhost:8888/CestaProductos",
        { "productoId": productoId, "email": email },
        httpOptions);
    }
    if (accion == "remover") {
      observable = this.http.delete("http://localhost:8888/CestaProductos/productoId=" + productoId + "/email=" + email,
        httpOptions);
    }
    return observable;
  }

  cestaReset(email: string): Observable<any> {
    let url: string = "http://localhost:8888/Cesta/reset/email=" + email;
    return this.http.get(url);
  }
}
