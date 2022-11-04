import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import basePath from '../common/basePath';
import { Producto } from '../models/producto';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private urlEndpoint: string;

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http:HttpClient) { 
    const {apiURL} = basePath;
    this.urlEndpoint = apiURL+"api/productos";
  }

  getProductos(): Observable <Producto[]>{  //Aqui agregué el parametro de busqueda
      return this.http.get<Producto[]>(this.urlEndpoint).pipe(
        map((response) => response as Producto[])
      );
  }

  create(producto:Producto): Observable <Producto> {
    return this.http.post<Producto>(this.urlEndpoint, producto, {headers: this.httpHeaders})
  }

  getProducto(codigo:number): Observable<Producto>{
    return this.http.get<Producto>(`${this.urlEndpoint}/${codigo}`)  
  
  }

  update(producto:Producto): Observable<Producto>{
    return this.http.put<Producto>(`${this.urlEndpoint}/${producto.codigo}`, producto, {headers: this.httpHeaders})
  }

  delete(codigo: number): Observable<Producto>{
    return this.http.delete<Producto>(`${this.urlEndpoint}/${codigo}`,{headers: this.httpHeaders})
  }
}
