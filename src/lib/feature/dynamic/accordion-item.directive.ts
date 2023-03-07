import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { BootstrapBreakpointService } from '../bootstrap-breakpoint.service';

@Directive({
  selector: '[appAccordionItem]'
})
export class AccordionItemDirective implements OnInit, OnDestroy {
  constructor(private element: ElementRef, private renderer: Renderer2, private breakpointService: BootstrapBreakpointService) {
  }

  @Input()
  appAccordionItem?: string;

  @Input()
  dataBsParent?: string;

  breakpoint$$?: Subscription;

  ngOnInit(): void {
    this.renderer.setAttribute(this.element.nativeElement, 'id', `collapse-${this.appAccordionItem}`);
    if (this.dataBsParent) {
      this.renderer.setAttribute(this.element.nativeElement, 'data-bs-parent', `#${this.dataBsParent}`);
    }
    this.breakpoint$$ = this.breakpointService.observeLower('lg').subscribe((isMobileView) => {
      if (isMobileView) {
        this.renderer.addClass(this.element.nativeElement, 'collapse');
      } else {
        this.renderer.removeClass(this.element.nativeElement, 'collapse');
      }
    });
  }

  ngOnDestroy(): void {
    this.breakpoint$$?.unsubscribe();
  }
}
