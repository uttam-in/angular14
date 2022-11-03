import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { ComprasComponent } from './compras/compras.component';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { InventarioComponent } from './inventario/inventario.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { VentasComponent } from './ventas/ventas.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'inventario',
        component: InventarioComponent
      },
      {
        path: 'proveedor',
        component: ProveedorComponent
      },
      {
        path: 'clientes',
        component: ClientesComponent
      },
      {
        path: 'ventas',
        component: VentasComponent
      },
      {
        path: 'compras',
        component: ComprasComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
