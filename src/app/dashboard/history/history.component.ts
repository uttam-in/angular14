import { Component, OnInit } from '@angular/core';
import { VentaService } from 'src/app/services/VentaService';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  ventaList:any[] = [];
  compraList:any[] = [];

  constructor(private ventaService: VentaService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.ventaService.getCompra().subscribe(
      (data) => {this.compraList = data},
      (error) => this.toastr.error("Error!",(error?.error?.nombre || '')+" stock not sufficient")      
    )

    this.ventaService.getVenta().subscribe(
      (data) => {this.ventaList = data},
      (error) => this.toastr.error("Error!",(error?.error?.nombre || '')+" stock not sufficient")      
    )
  }

}
