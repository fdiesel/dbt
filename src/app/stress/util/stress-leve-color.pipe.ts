import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stressLeveColor'
})
export class StressLeveColorPipe implements PipeTransform {

  transform(stressLevel: number | undefined): string {
    if (stressLevel === undefined) {
      return 'dark';
    } else if (stressLevel >= 70) {
      return 'danger';
    } else if (stressLevel >= 40) {
      return 'warning';
    } else {
      return 'success';
    }
  }

}
