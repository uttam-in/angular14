import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import basePath from '../common/basePath';

@Injectable({
    providedIn: 'root'
  })
export class VentaService {
    constructor(private http: HttpClient) {}
    private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  
    public createVenta(venta:any): Observable<any> {
      const url = basePath+'create-venta/';
      return this.http.post<any>(url, venta, {headers: this.httpHeaders})
    }

    public createCompra(venta:any): Observable<any> {
      const url = basePath+'create-compra/';
      return this.http.post<any>(url, venta, {headers: this.httpHeaders})
    }

    public loginUser(payload:any):Observable<any> {
      const url = basePath+'auth/signin';
      return this.http.post<any>(url, payload, {headers: this.httpHeaders})
    }

    public logout(){
      localStorage.clear();      
    }

    public getDashboardDetails():Observable<any> {
      const url = basePath+'dashboard-pay/';
      return this.http.get<any>(url, {headers: this.httpHeaders})
    }
    
  }