import {Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {Subscription} from 'rxjs';
import {BreakpointService} from 'ngx-breakpoints';

@Directive({
  selector: '[appAccordionButton]',
})
export class AccordionButtonDirective implements OnInit, OnDestroy {
  constructor(private element: ElementRef, private renderer: Renderer2, private breakpoints: BreakpointService) {
  }

  @Input()
  appAccordionButton?: string;

  breakpoints$$?: Subscription;

  ngOnInit(): void {
    this.renderer.addClass(this.element.nativeElement, 'accordion-button');
    this.renderer.setAttribute(this.element.nativeElement, 'data-bs-target', `#collapse-${this.appAccordionButton}`);
    this.renderer.setAttribute(this.element.nativeElement, 'aria-controls', `collapse-${this.appAccordionButton}`);
    this.breakpoints$$ = this.breakpoints.observeMobileView().subscribe((isMobileView) => {
      if (isMobileView) {
        this.renderer.addClass(this.element.nativeElement, 'collapsed');
        this.renderer.setAttribute(this.element.nativeElement, 'aria-expanded', 'false');
        this.renderer.setAttribute(this.element.nativeElement, 'data-bs-toggle', 'collapse');
        this.renderer.setAttribute(this.element.nativeElement, 'href', `#collapse-${this.appAccordionButton}`);
        this.renderer.setStyle(this.element.nativeElement, 'cursor', 'pointer');
      } else {
        this.renderer.removeClass(this.element.nativeElement, 'collapsed');
        this.renderer.setAttribute(this.element.nativeElement, 'aria-expanded', 'true');
        this.renderer.removeAttribute(this.element.nativeElement, 'data-bs-toggle');
        this.renderer.removeAttribute(this.element.nativeElement, 'href');
        this.renderer.setStyle(this.element.nativeElement, 'cursor', 'auto');
      }
    });
  }

  ngOnDestroy(): void {
    this.breakpoints$$?.unsubscribe();
  }
}
