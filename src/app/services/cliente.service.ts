import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import basePath from '../common/basePath';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndpoint:string;

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http:HttpClient) { 
    const {apiURL} = basePath;
    this.urlEndpoint = apiURL+"client/clientes";
  }

  getClientes(): Observable <Cliente[]>{  //Aqui agregué el parametro de busqueda
    return this.http.get<Cliente[]>(this.urlEndpoint).pipe(
      map((response) => response as Cliente[])
    );
  }

  create(cliente:Cliente): Observable <Cliente> {
    return this.http.post<Cliente>(this.urlEndpoint, cliente, {headers: this.httpHeaders})
  }

  getCliente(codigo:number): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.urlEndpoint}/${codigo}`)  
  }

  update(cliente:Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${this.urlEndpoint}/${cliente.codigo}`, cliente, {headers: this.httpHeaders})
  }

  delete(codigo: number): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlEndpoint}/${codigo}`,{headers: this.httpHeaders})
  }
}
