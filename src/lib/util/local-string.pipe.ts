import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localString'
})
export class LocalStringPipe implements PipeTransform {

  transform(value: string | number | boolean | undefined): string | undefined {
    if (typeof value === 'boolean') {
      return value ? 'yes' : 'no';
    }
    return value?.toLocaleString();
  }

}
