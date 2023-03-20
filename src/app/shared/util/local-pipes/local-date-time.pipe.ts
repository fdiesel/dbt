import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localDateTime'
})
export class LocalDateTimePipe implements PipeTransform {

  transform(value: string): unknown {
    return new Date(value).toLocaleString();
  }

}
