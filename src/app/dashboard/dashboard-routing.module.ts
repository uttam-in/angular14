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
        redirectTo: 'analítica',
        pathMatch: 'full'
      },
      {
        path: 'analítica',
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
      },
      { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
