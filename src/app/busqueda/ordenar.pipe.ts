import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(array: Array<Object>, propiedad: string): Array<Object> {

    if (array !== undefined) {
      array.sort((a, b) => {
         if (a[propiedad] === undefined && b[propiedad] === undefined) return 0;
         if (a[propiedad] === undefined)  return -1;
         if (b[propiedad] === undefined)  return 1;
    
         if (a[propiedad] < b[propiedad]) return -1;
         if (a[propiedad] > b[propiedad]) return 1;
         return 0;
      });
    }
    return array;
  }

}
