import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'range'
})
export class RangePipe implements PipeTransform {

  transform(value: number[]): string {
    const min = Math.min(...value);
    const max = Math.max(...value);
    if (min === max) {
      return min.toLocaleString();
    }
    return `${min.toLocaleString()} - ${max.toLocaleString()}`;
  }

}
