import {Component, EventEmitter, HostBinding, Output} from '@angular/core';

@Component({
  selector: 'li[delete]',
  templateUrl: './swipe-delete.component.html',
  styleUrls: ['./swipe-delete.component.sass']
})
export class SwipeDeleteComponent {
  @Output() onDelete = new EventEmitter();

  @HostBinding('class') cls = 'p-0';

  showDelete = false;

  show(): void {
    this.showDelete = true;
  }

  hide(): void {
    this.showDelete = false;
  }
}
