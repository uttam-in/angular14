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

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    SharedModule,
    NgxPaginationModule,
  ],
  declarations: [
    DashboardComponent,
    HomeComponent,
    InventarioComponent,
    ProveedorComponent,
    ClientesComponent,
    VentasComponent,
    ComprasComponent,
  ],

})
export class DashboardModule { }
