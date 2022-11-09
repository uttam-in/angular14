import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { Proveedor } from '../../models/proveedor';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {

  @ViewChild("inventarioModalAdd")
  modalContentAdd!: TemplateRef<any>;
  @ViewChild("inventarioModalEdit")
  modalContentEdit!: TemplateRef<any>;

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  closeResult: string = '';

  openAdd() {
    this.modalService.open(this.modalContentAdd, {ariaLabelledBy: 'modal-basic-title', size: <any>'xl' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  } 

  closeAdd(){
    this.modalService.dismissAll()
  }

  openEdit() {
    this.modalService.open(this.modalContentEdit, {ariaLabelledBy: 'modal-basic-title', size: <any>'xl' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  } 

  closeEdit(){
    this.modalService.dismissAll()
  }

  filtroproveedor = '';
  proveedores: Proveedor[] = [];

  totalRecords:Number | undefined;
  page:number = 1;
  config: any;

  constructor(private proveedorService:ProveedorService,
    private modalService: NgbModal) { }

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
