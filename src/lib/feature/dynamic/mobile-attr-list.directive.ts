import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { BootstrapBreakpointService } from '../bootstrap-breakpoint.service';

@Directive({
  selector: '[appMobileAttrList]'
})
export class MobileAttrListDirective implements OnInit, OnDestroy {
  constructor(private element: ElementRef, private renderer: Renderer2, private bootstrapBreakpointService: BootstrapBreakpointService) {
  }

  @Input()
  appMobileAttrList: string[][] = [];

  breakpoint$$?: Subscription;

  ngOnInit(): void {
    this.breakpoint$$ = this.bootstrapBreakpointService.observeLower('lg').subscribe((isMobileView: boolean) => {
      if (isMobileView) {
        this.appMobileAttrList.forEach(attr => this.renderer.setAttribute(this.element.nativeElement, attr[0], attr[1]));
      } else {
        this.appMobileAttrList.forEach(attr => this.renderer.removeAttribute(this.element.nativeElement, attr[0]));
      }
    });
  }

  ngOnDestroy(): void {
    this.breakpoint$$?.unsubscribe();
  }
}
