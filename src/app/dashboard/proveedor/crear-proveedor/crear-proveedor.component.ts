import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { Proveedor } from '../../../models/proveedor';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-crear-proveedor',
  templateUrl: './crear-proveedor.component.html',
  styleUrls: ['./crear-proveedor.component.css']
})
export class CrearProveedorComponent implements OnInit {

  public proveedor: Proveedor = new Proveedor();
  public titulo:string = "Crear Proveedor";

  constructor(private proveedorService: ProveedorService, private modalService: NgbModal,
    private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
     this.cargarProveedor();
  }

  close(){
    this.modalService.dismissAll()
  }

  cargarProveedor(): void{
    this.activatedRoute.params.subscribe(params => {
      let nit = params['nit']
      if(nit){
        this.proveedorService.getProveedor(nit).subscribe((proveedor => this.proveedor = proveedor)
        )
      }
    }

    )
  }

  create(): void{
    this.proveedorService.create(this.proveedor)
    .subscribe(
      cliente => {
        this.modalService.dismissAll();
      }
    );
  }

  update():void{
    this.proveedorService.update(this.proveedor)
    .subscribe(proveedor =>{
      this.modalService.dismissAll();
    })
  }
}  


