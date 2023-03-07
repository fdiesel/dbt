import { Directive, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { BootstrapBreakpointService } from '../bootstrap-breakpoint.service';

@Directive({
  selector: '[appDesktopOnly]',
})
export class DesktopOnlyDirective implements OnInit, OnDestroy {
  constructor(private templateRef: TemplateRef<any>,
              private viewContainerRef: ViewContainerRef,
              private breakpointService: BootstrapBreakpointService) {
  }

  breakpoint$$?: Subscription;

  ngOnInit(): void {
    this.breakpoint$$ = this.breakpointService.observeLower('lg').subscribe((isMobileView) => {
      if (isMobileView) {
        this.viewContainerRef.clear();
      } else {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }
    });
  }

  ngOnDestroy(): void {
    this.breakpoint$$?.unsubscribe();
  }
}
