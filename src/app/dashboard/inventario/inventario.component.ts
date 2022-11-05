import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { NgxSpinnerService } from "ngx-spinner";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

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
  

  constructor(
    private productoService: ProductoService,
    private spinner: NgxSpinnerService,
    private modalService: NgbModal
    ) { 
    

  }

  ngOnInit(): void {
    this.spinner.show();
    this.productoService.getProductos().subscribe(
      productos => {
        this.productos = productos;
        this.spinner.hide();
      }
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

  closeResult: string = '';

  @ViewChild("inventarioModal")
  modalContent!: TemplateRef<any>;

  open() {
    this.modalService.open(this.modalContent, {ariaLabelledBy: 'modal-basic-title', size: <any>'xl' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  } 

  close(){
    this.modalService.dismissAll()
  }
    
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  

}
