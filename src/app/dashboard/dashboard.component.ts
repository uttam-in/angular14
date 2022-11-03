import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashBoardNavItems = [
    { name: "Analítica", path: "analítica" },
    { name: "Inventario", path: "inventario" },
    { name: "Proveedores", path: "proveedor" },
    { name: "Clientes", path: "clientes" },
    { name: "Ventas", path: "ventas" },
    { name: "Compras", path: "compras" },      
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
