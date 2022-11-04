import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import basePath from '../common/basePath';
import { Proveedor } from '../models/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private urlEndpoint: string;

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  
  constructor(private http:HttpClient) {
    const {apiURL} = basePath;
    this.urlEndpoint = apiURL+"prove/proveedores";
  }

  getProveedores(): Observable <Proveedor[]> {
    return this.http.get<Proveedor[]> (this.urlEndpoint).pipe(
      map((response) => response as Proveedor[])
    );
  }

  create(proveedor:Proveedor): Observable <Proveedor> {
    return this.http.post<Proveedor>(this.urlEndpoint, proveedor, {headers: this.httpHeaders})
  }

  getProveedor(nit:string): Observable<Proveedor>{
    return this.http.get<Proveedor>(`${this.urlEndpoint}/${nit}`)
  }

  update(proveedor:Proveedor): Observable<Proveedor>{
    return this.http.put<Proveedor>(`${this.urlEndpoint}/${proveedor.nit}`, proveedor, {headers: this.httpHeaders})
  }

  delete(nit: string): Observable<Proveedor>{
    return this.http.delete<Proveedor>(`${this.urlEndpoint}/${nit}`,{headers: this.httpHeaders})
  }
}
