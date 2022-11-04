import { Component, OnInit } from '@angular/core';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { Proveedor } from '../../models/proveedor';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {

  filtroproveedor = '';
  proveedores: Proveedor[] = [];

  totalRecords:Number | undefined;
  page:number = 1;
  config: any;

  constructor(private proveedorService:ProveedorService) { }

  ngOnInit(): void {
    this.proveedorService.getProveedores().subscribe(
      proveedores => this.proveedores = proveedores
    );

    this.config = {
      itemsPerpage: 10,
      currentPage: 1, 
      totalItems: this.proveedores.length
    };
  }

  pageChanged(event: any){
    this.config.currentPage = event;
  }
}
