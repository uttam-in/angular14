import { Component, OnInit, ViewChild } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  filtroproducto = '';
  productos: Producto[] = [];
 
  
  totalRecords:Number | undefined;
  page:number = 1;
  config: any;
  

  constructor(private productoService: ProductoService) { 
    

  }

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(
      productos => this.productos = productos      
    );

    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.productos.length
    };

  }
  
 

  pageChanged(event: any){
    this.config.currentPage = event;
  }
  

}
