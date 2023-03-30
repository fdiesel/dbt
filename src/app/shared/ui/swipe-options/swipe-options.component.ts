import {AfterViewInit, Component, ElementRef, OnDestroy, Renderer2, ViewChild} from '@angular/core';
import {SwipeOptionsService} from "./swipe-options.service";
import {Subscription} from "rxjs";

@Component({
  selector: '[swipe-options]',
  templateUrl: './swipe-options.component.html',
  styleUrls: ['./swipe-options.component.sass']
})
export class SwipeOptionsComponent implements AfterViewInit, OnDestroy {
  constructor(private readonly renderer: Renderer2,
              private readonly service: SwipeOptionsService) {
  }

  @ViewChild('boundary') boundaryElement!: ElementRef;
  @ViewChild('drag') dragElement!: ElementRef;
  @ViewChild('before') beforeElement!: ElementRef;
  @ViewChild('center') centerElement!: ElementRef;
  @ViewChild('after') afterElement!: ElementRef;

  swipe$$!: Subscription;

  beforeWidth = 0;
  afterWidth = 0;

  ngAfterViewInit(): void {
    this.beforeWidth = this.beforeElement.nativeElement.offsetWidth;
    this.afterWidth = this.afterElement.nativeElement.offsetWidth;
    this.boundaryElement.nativeElement.scroll({
      top: 0,
      left: this.beforeWidth
    });
    this.swipe$$ = this.service.swipe.subscribe(() => {
      if (this.position !== 'center') {
        this.moveTo('center');
      }
    });
  }

  position: 'before' | 'center' | 'after' = 'center';

  moveTo(position: typeof this.position): void {
    if (position !== 'center') {
      this.service.swipe.next();
    }
    this.position = position;
    switch (position) {
      case 'before':
        this.boundaryElement.nativeElement.scroll({
          top: 0,
          left: this.beforeWidth + this.afterWidth,
          behavior: 'smooth'
        });
        break;
      case 'center':
        this.boundaryElement.nativeElement.scroll({
          top: 0,
          left: this.beforeWidth,
          behavior: 'smooth'
        });
        break;
      case 'after':
        this.boundaryElement.nativeElement.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
        break;
    }
  }

  private scrollTimeout: any;

  scrollSnap(): void {
    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      this.snap();
    }, 100)
  }

  snap(): void {
    const scrollLeft = this.boundaryElement.nativeElement.scrollLeft;
    if (scrollLeft < this.beforeWidth / 2) {
      this.moveTo('after');
    } else if (scrollLeft > this.beforeWidth + this.afterWidth / 2) {
      this.moveTo('before');
    } else {
      this.moveTo('center');
    }
  }

  ngOnDestroy() {
    this.swipe$$.unsubscribe();
  }
}

