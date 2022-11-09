import { Component, OnInit } from '@angular/core';
import { VentaService } from 'src/app/services/VentaService';

class ChartData {
  title : any;
  type : any;
  data: any;
  columnNames: any;
  options: any;
  width: any;
  height: any;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  chart : ChartData = {
    "title": 'Payment status of Ventas',
    "type": 'PieChart',
    "data": [],
    "columnNames": ['Browser', 'Percentage'],
    "options": {
        is3D: true
    },
    "width": 550,
    "height": 400
}

barchart : ChartData = {
    "title": 'Payment status of Compras',
    "type": 'PieChart',
    "data": [],
    "columnNames": ['Browser', 'Percentage'],
    "options": {
        is3D: true
    },
    "width": 550,
    "height": 400
}

constructor(private ventaService: VentaService) {
}

topFiveVentas:any = []
topFiveCompra:any = []

topFiveDalleVentas:any = []
topFiveDalleCompra:any = []

ngOnInit(): void {
    this.ventaService.getDashboardDetails().subscribe(response=>{
        console.log(response);
        this.chart.data = [
            ['Paid', response?.venta_paid],
            ['Pending', response?.venta_pending]
        ]
        this.barchart.data = [
            ['Paid', response?.compra_paid],
            ['Pending', response?.compra_pending]
        ]
        this.topFiveVentas = response?.venta_top5
        this.topFiveCompra = response?.compra_top5
    });

    this.ventaService.getCompraCount().subscribe(response=>{
        this.topFiveDalleVentas = response;
    });

    this.ventaService.getVentaCount().subscribe(response=>{
        this.topFiveDalleCompra = response;
    });
}


}
