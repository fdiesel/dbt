import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { BootstrapBreakpointService } from '../bootstrap-breakpoint.service';

@Directive({
  selector: '[appDesktopClassList]',
})
export class DesktopClassListDirective implements OnInit, OnDestroy {
  constructor(private element: ElementRef, private renderer: Renderer2, private bootstrapBreakpointService: BootstrapBreakpointService) {
  }

  @Input()
  appDesktopClassList: string[] = [];

  breakpoint$$?: Subscription;

  ngOnInit(): void {
    this.breakpoint$$ = this.bootstrapBreakpointService.observeLower('lg').subscribe((isMobileView: boolean) => {
      if (isMobileView) {
        this.appDesktopClassList.forEach(cls => this.renderer.removeClass(this.element.nativeElement, cls));
      } else {
        this.appDesktopClassList.forEach(cls => this.renderer.addClass(this.element.nativeElement, cls));
      }
    });
  }

  ngOnDestroy(): void {
    this.breakpoint$$?.unsubscribe();
  }
}
