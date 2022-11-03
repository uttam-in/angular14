import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroproducto'
})
export class FiltroproductoPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPosts = [];
    for(const post of value){
      if(post.descripcion.indexOf(arg) > -1){
          resultPosts.push(post);
      } else if(post.nombre.indexOf(arg) > -1){
          resultPosts.push(post);
      } 
    };
    return resultPosts;  
  }

}
