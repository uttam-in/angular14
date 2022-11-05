import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  public producto: Producto = new Producto();
  public titulo:string =  "Crear Producto";

  constructor(private productoService: ProductoService, 
    private router:Router, private activatedRoute: ActivatedRoute,private modalService: NgbModal ) { }

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
      this.modalService.dismissAll();
      }
    );
  }

  close(){
    this.modalService.dismissAll()
  }

  update():void{
    this.productoService.update(this.producto)
    .subscribe(producto =>{
      this.modalService.dismissAll();
    })
  }
}
