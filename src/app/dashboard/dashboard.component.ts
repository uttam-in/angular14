import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VentaService } from '../services/VentaService';

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
    { name: "History", path: "history" },      
  ]

  navTitle = "Bienvenido Al Sistema";

  constructor(private ventaService: VentaService,
    private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.ventaService.logout();
    this.router.navigate(['/']);
  }

}
