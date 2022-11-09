import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { VentasComponent } from './ventas/ventas.component';
import { ComprasComponent } from './compras/compras.component';
import { FormsModule } from '@angular/forms';
import { InventarioComponent } from './inventario/inventario.component';
import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { CrearProductoComponent } from './inventario/crear-producto/crear-producto.component';
import { EditarProveedorComponent } from './proveedor/editar-proveedor/editar-proveedor/editar-proveedor.component';
import { CrearProveedorComponent } from './proveedor/crear-proveedor/crear-proveedor.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    SharedModule,
    NgxPaginationModule,
    GoogleChartsModule,
  ],
  declarations: [
    DashboardComponent,
    HomeComponent,
    InventarioComponent,
    ProveedorComponent,
    ClientesComponent,
    VentasComponent,
    ComprasComponent,
    CrearProductoComponent,
    EditarProveedorComponent,
    CrearProveedorComponent,
    HistoryComponent,
  ],

})
export class DashboardModule { }
