import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newline'
})
export class NewlinePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      return value.replace(/(?:\r\n|\r|\n)/g, '<br />');
    } else {
      return value;
    }
  }

}