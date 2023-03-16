import {Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {Subscription} from 'rxjs';
import {BreakpointService} from "ngx-breakpoints";

@Directive({
  selector: '[appAccordionItem]'
})
export class AccordionItemDirective implements OnInit, OnDestroy {
  constructor(private element: ElementRef, private renderer: Renderer2, private breakpoints: BreakpointService) {
  }

  @Input()
  appAccordionItem?: string;

  @Input()
  dataBsParent?: string;

  breakpoints$$?: Subscription;

  ngOnInit(): void {
    this.renderer.setAttribute(this.element.nativeElement, 'id', `collapse-${this.appAccordionItem}`);
    if (this.dataBsParent) {
      this.renderer.setAttribute(this.element.nativeElement, 'data-bs-parent', `#${this.dataBsParent}`);
    }
    this.breakpoints$$ = this.breakpoints.observeMobileView().subscribe((isMobileView) => {
      if (isMobileView) {
        this.renderer.addClass(this.element.nativeElement, 'collapse');
      } else {
        this.renderer.removeClass(this.element.nativeElement, 'collapse');
      }
    });
  }

  ngOnDestroy(): void {
    this.breakpoints$$?.unsubscribe();
  }
}
