import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"; //58.a
import { Observable } from "rxjs";  //58.b

//58.e
@Injectable()
export class BusquedaService {

  constructor(private http: HttpClient) { } //58.c

  //58.d
  getProductoById(id:string): Observable<any>{
    let url :string = "http://localhost:8888/Producto/id="+id;
    return this.http.get(url);
  }

  getProductos(parametros :string): Observable<any>{
    let url :string = "http://localhost:8888/Productos/"+parametros;
    return this.http.get(url);
  }
}
