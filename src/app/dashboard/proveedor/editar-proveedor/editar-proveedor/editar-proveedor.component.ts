import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proveedor } from '../../../../models/proveedor';
import { ProveedorService } from '../../proveedor.service';

@Component({
  selector: 'app-editar-proveedor',
  templateUrl: './editar-proveedor.component.html',
  styleUrls: ['./editar-proveedor.component.css']
})
export class EditarProveedorComponent implements OnInit {

  public proveedor?: Proveedor = new Proveedor();
  public titulo:string = "Editar Proveedor";
  
  constructor(private proveedorService: ProveedorService, 
    private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarProveedor();
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
        this.router.navigate(['/proveedor'])
      }
    );
  }

  update():void{
    this.proveedorService.update(this.proveedor)
    .subscribe(proveedor =>{
        this.router.navigate(['/proveedor'])
    })
  }

}
