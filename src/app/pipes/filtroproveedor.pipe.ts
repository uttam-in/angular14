import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroproveedor'
})
export class FiltroproveedorPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPosts = [];
    for(const post of value){
      if(post.nombreVendedor.indexOf(arg) > -1){
        resultPosts.push(post);
      } else if(post.nombreEmpresa.indexOf(arg) >-1){
        resultPosts.push(post);
      } else if(post.nit.indexOf(arg) > -1){
        resultPosts.push(post);
      };
    };
    
    
    return resultPosts;
  }

}
