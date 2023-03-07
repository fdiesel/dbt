import { Component, Input } from '@angular/core';

@Component({
  selector: 'div[app-dynamic-map]',
  templateUrl: './dynamic-map.component.html',
})
export class DynamicMapComponent {
  @Input()
  accordionId?: string;
  @Input()
  rowClassList?: string[];
}
