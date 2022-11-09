import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import basePath from '../common/basePath';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  apiUrl = ""
  constructor(private http: HttpClient) {
    this.apiUrl = basePath.apiURL;
  }
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })


  public createVenta(venta: any): Observable<any> {
    const url = this.apiUrl + 'api/create-venta/';
    return this.http.post<any>(url, venta, { headers: this.httpHeaders })
  }

  public getVenta(): Observable<any> {
    const url = this.apiUrl + 'api/create-venta/';
    return this.http.get<any>(url)
  }

  public createCompra(venta: any): Observable<any> {
    const url = this.apiUrl + 'api/create-compra/';
    return this.http.post<any>(url, venta, { headers: this.httpHeaders })
  }

  public getCompra(): Observable<any> {
    const url = this.apiUrl + 'api/create-compra/';
    return this.http.get<any>(url)
  }  

  public loginUser(payload: any): Observable<any> {
    const url = this.apiUrl + 'api/auth/signin';
    return this.http.post<any>(url, payload, { headers: this.httpHeaders })
  }

  public logout() {
    localStorage.clear();
  }

  public getDashboardDetails(): Observable<any> {
    const url = this.apiUrl + 'api/dashboard-pay/';
    return this.http.get<any>(url, { headers: this.httpHeaders })
  }

}