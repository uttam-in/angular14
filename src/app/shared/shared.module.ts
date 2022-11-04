import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroclientePipe } from '../pipes/filtrocliente.pipe';
import { FiltroproductoPipe } from '../pipes/filtroproducto.pipe';

@NgModule({
  declarations: [
    FiltroclientePipe,
    FiltroproductoPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FiltroclientePipe,
    FiltroproductoPipe
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
