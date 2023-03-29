import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({ selector: '[swipe]' })
export class SwipeDirective {

  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();

  swipeCoord = [0, 0];
  swipeTime = new Date().getTime();

  constructor() { }

  @HostListener('mousedown', ['$event']) onClickStart($event: any) {
    this.onSwipe($event, 'start');
  }

  @HostListener('mouseup', ['$event']) onClickEnd($event: any) {
    this.onSwipe($event, 'end');
  }

  @HostListener('touchstart', ['$event']) onSwipeStart($event: any) {
    this.onSwipe($event, 'start');
  }

  @HostListener('touchend', ['$event']) onSwipeEnd($event: any) {
    this.onSwipe($event, 'end');
  }

  onSwipe(event: TouchEvent | MouseEvent, when: 'start' | 'end') {
    this.swipe(event, when);
  }

  swipe(event: TouchEvent | MouseEvent, when: string): void {
    const time = new Date().getTime();
    let coord: [number, number] | undefined;

    if ('changedTouches' in event) {
      coord = [event.changedTouches[0].clientX, event.changedTouches[0].clientY];
    } else if ('clientX' in event && 'clientY' in event) {
      coord = [event.clientX, event.clientY];
    }

    if (when === 'start' && coord) {
      this.swipeCoord = coord;
      this.swipeTime = time;
    } else if (when === 'end' && coord) {
      const direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
      const duration = time - this.swipeTime;

      if (duration < 1000 //
        && Math.abs(direction[0]) > 30 // Long enough
        && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) { // Horizontal enough
        const swipeDir = direction[0] < 0 ? 'next' : 'previous';
        if (swipeDir === 'next') {
          this.next.emit();
        } else {
          this.previous.emit();
        }
      }
    }
  }
}
