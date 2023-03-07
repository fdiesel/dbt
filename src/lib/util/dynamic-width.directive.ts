import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { BootstrapBreakpointService } from '../feature/bootstrap-breakpoint.service';

@Directive({
  selector: '[appDynamicWidth]',
})
export class DynamicWidthDirective implements OnInit, OnDestroy {
  constructor(private element: ElementRef, private renderer: Renderer2, private bootstrapBreakpointService: BootstrapBreakpointService) {
  }

  @Input()
  appDynamicWidth: string | undefined;

  breakpoint$$?: Subscription;

  ngOnInit(): void {
    if (!this.appDynamicWidth) {
      this.appDynamicWidth = '420px';
    }
    this.renderer.setStyle(this.element.nativeElement, 'width', '100%');
    this.breakpoint$$ = this.bootstrapBreakpointService.observeLower('lg').subscribe((isMobileView: boolean) => {
      if (isMobileView) {
        this.renderer.removeStyle(this.element.nativeElement, 'max-width');
      } else {
        this.renderer.setStyle(this.element.nativeElement, 'max-width', this.appDynamicWidth);
      }
    });
  }

  ngOnDestroy(): void {
    this.breakpoint$$?.unsubscribe();
  }
}
