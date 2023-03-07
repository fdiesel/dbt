import { Directive, Input, OnChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepeat]',
})
export class RepeatDirective implements OnChanges {
  constructor(private templateRef: TemplateRef<any>,
              private viewContainerRef: ViewContainerRef) {
  }

  @Input()
  appRepeat = 0;

  ngOnChanges(): void {
    this.viewContainerRef.clear();
    for (let i = 0; i < this.appRepeat; i++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }
}
