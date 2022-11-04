import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroclientePipe } from '../pipes/filtrocliente.pipe';
import { FiltroproductoPipe } from '../pipes/filtroproducto.pipe';
import { FiltroproveedorPipe } from '../pipes/filtroproveedor.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    FiltroclientePipe,
    FiltroproductoPipe,
    FiltroproveedorPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbModule
  ],
  exports: [
    FiltroclientePipe,
    FiltroproductoPipe,
    FiltroproveedorPipe,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbModule
  ]
})
export class SharedModule { 
  static forRoot() {
    return {
        ngModule: SharedModule,
        providers: [ 
          //services that you want to share across modules
            // SharedService,
            // SharedService2
        ]
    }
}  
}
