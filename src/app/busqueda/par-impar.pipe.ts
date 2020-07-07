import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parImpar'
})
export class ParImparPipe implements PipeTransform {

  transform(array:Array<Object>, tipo:string): Array<Object> {
    if(array === undefined || (tipo !== "par" && tipo !== "impar")) {
      return null;
    }
    if (tipo == "par") return array.filter((item, index) => { return index % 2 === 0; });
    else               return array.filter((item, index) => { return index % 2 === 1; });
  }

}
