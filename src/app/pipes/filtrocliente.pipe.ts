import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrocliente'
})
export class FiltroclientePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPosts = [];
    for(const post of value){
       if(post.nombreNegocio.indexOf(arg) > -1){
        resultPosts.push(post);
    } else if(post.nombreFacturacion.indexOf(arg) > -1){
        resultPosts.push(post);
    } 
    };

    return resultPosts;
  }

}
