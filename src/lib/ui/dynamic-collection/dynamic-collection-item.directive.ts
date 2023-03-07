import { Directive, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BootstrapBreakpointService } from '../../feature/bootstrap-breakpoint.service';

@Directive({
  selector: '[appDynamicCollectionItem]'
})
export class DynamicCollectionItemDirective implements OnInit, OnDestroy {
  constructor(private bootstrapBreakpoint: BootstrapBreakpointService) {
  }

  @Input()
  colClassList = ['col'];

  @HostBinding('class')
  hostClasses?: string;

  breakpoint$$?: Subscription;

  ngOnInit(): void {
    this.breakpoint$$ = this.bootstrapBreakpoint.observeLower('lg').subscribe((isMobile) => {
      if (isMobile) {
        this.hostClasses = 'list-group-item';
      } else {
        this.hostClasses = this.colClassList.join(' ');
      }
    });
  }

  ngOnDestroy(): void {
    this.breakpoint$$?.unsubscribe();
  }
}
