import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroclientePipe } from '../pipes/filtrocliente.pipe';
import { FiltroproductoPipe } from '../pipes/filtroproducto.pipe';
import { FiltroproveedorPipe } from '../pipes/filtroproveedor.pipe';

@NgModule({
  declarations: [
    FiltroclientePipe,
    FiltroproductoPipe,
    FiltroproveedorPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FiltroclientePipe,
    FiltroproductoPipe,
    FiltroproveedorPipe
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
