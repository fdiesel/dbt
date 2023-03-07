import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'catchNotAvailable'
})
export class CatchNotAvailablePipe implements PipeTransform {

  transform(value: string | number | undefined): unknown {
    if (!value || value === '' || value === '0') {
      return 'N/A';
    } else {
      return value;
    }
  }

}
