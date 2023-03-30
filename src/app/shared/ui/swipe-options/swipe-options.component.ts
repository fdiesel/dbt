import {AfterViewInit, Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {CdkDragEnd, Point} from "@angular/cdk/drag-drop";

@Component({
  selector: '[swipe-options]',
  templateUrl: './swipe-options.component.html',
})
export class SwipeOptionsComponent implements AfterViewInit {
  constructor(private readonly renderer: Renderer2) {
  }

  @ViewChild('boundary') boundaryElement!: ElementRef;
  @ViewChild('drag') dragElement!: ElementRef;
  @ViewChild('before') beforeElement!: ElementRef;
  @ViewChild('center') centerElement!: ElementRef;
  @ViewChild('after') afterElement!: ElementRef;

  beforeWidth = 0;
  afterWidth = 0;

  ngAfterViewInit(): void {
    this.beforeWidth = this.beforeElement.nativeElement.offsetWidth;
    this.afterWidth = this.afterElement.nativeElement.offsetWidth;
    this.renderer.setStyle(this.boundaryElement.nativeElement, 'transform', 'translateX(calc(-' + this.beforeWidth + 'px - ' + this.afterWidth + 'px))')
    this.renderer.setStyle(this.boundaryElement.nativeElement, 'width', `calc(100% + ${this.beforeWidth}px * 2 + ${this.afterWidth}px * 2)`);
    const innerWidth = `calc(100% - ${this.beforeWidth}px - ${this.afterWidth}px)`;
    this.renderer.setStyle(this.dragElement.nativeElement, 'width', innerWidth);
    this.renderer.setStyle(this.centerElement.nativeElement, 'width', innerWidth);
    this.moveTo('center');
  }

  startPoint: Point = {
    x: 0,
    y: 0
  }

  position: 'start' | 'center' | 'end' = 'center';

  moveTo(position: typeof this.position): void {
    this.position = position;
    switch (position) {
      case 'start':
        this.startPoint = {
          x: this.beforeWidth + this.afterWidth,
          y: 0
        };
        break;
      case 'center':
        this.startPoint = {
          x: this.afterWidth,
          y: 0
        }
        break;
      case 'end':
        this.startPoint = {
          x: 0,
          y: 0
        }
        break;
    }
  }

  onDragEnd(cdkDragEnd: CdkDragEnd): void {
    const endPoint: Point = cdkDragEnd.source.getFreeDragPosition();
    if (endPoint.x < this.afterWidth / 2) {
      this.moveTo('end');
    } else if (endPoint.x > this.afterWidth + this.beforeWidth / 2) {
      this.moveTo('start');
    } else {
      this.moveTo('center');
    }
  }
}

