import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  filtrocliente = '';
  clientes: Cliente [] = [];

  totalRecords:number | undefined;
  page:number = 1;
  config: any;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(
      clientes => this.clientes = clientes
    );

    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.clientes.length
    };
  }

  pageChanged(event: any){
    this.config.currentPage = event;
  }
}
