import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  filtrocliente = '';
  clientes: Cliente [] = [];

  totalRecords:number | undefined;
  page:number = 1;
  config: any;

  @ViewChild("clientesModal")
  modalContent!: TemplateRef<any>;

  closeResult: string = '';

  constructor(private clienteService: ClienteService,
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(
      clientes => this.clientes = clientes
    );

    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.clientes.length
    };
  }

  pageChanged(event: any){
    this.config.currentPage = event;
  }

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
