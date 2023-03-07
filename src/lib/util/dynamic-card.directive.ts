import { AfterViewInit, Directive, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { BootstrapBreakpointService } from '../feature/bootstrap-breakpoint.service';

@Directive({
  selector: '[appDynamicCard]',
})
export class DynamicCardDirective implements AfterViewInit, OnDestroy {
  constructor(private element: ElementRef, private renderer: Renderer2, private bootstrapBreakpointService: BootstrapBreakpointService) {
  }

  breakpoint$$?: Subscription;

  ngAfterViewInit(): void {
    this.breakpoint$$ = this.bootstrapBreakpointService.observeLower('lg').subscribe(isMobile => {
      if (isMobile) {
        this.renderer.addClass(this.element.nativeElement, 'rounded-0');
        for (const child of this.element.nativeElement.children) {
          this.renderer.addClass(child, 'rounded-0');
        }
      } else {
        this.renderer.removeClass(this.element.nativeElement, 'rounded-0');
        for (const child of this.element.nativeElement.children) {
          this.renderer.removeClass(child, 'rounded-0');
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.breakpoint$$?.unsubscribe();
  }
}
