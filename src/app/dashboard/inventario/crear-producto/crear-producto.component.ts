import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  public producto?: Producto = new Producto();
  public titulo:string =  "Crear Producto";

  constructor(private productoService: ProductoService, 
    private router:Router, private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.cargarProducto();
  }

  cargarProducto(): void{
    this.activatedRoute.params.subscribe(params => {
      let codigo = params['codigo']
      if(codigo){
        this.productoService.getProducto(codigo).subscribe((producto => this.producto = producto)
        )
      }
    }

    )
  }

  create(): void{
    this.productoService.create(this.producto)
    .subscribe(producto => {
        this.router.navigate(['/inventario'])
      }
    );
  }

  update():void{
    this.productoService.update(this.producto)
    .subscribe(producto =>{
        this.router.navigate(['/inventario'])
    })
  }
}
