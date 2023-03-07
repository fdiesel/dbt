import { Directive, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BootstrapBreakpointService } from '../../feature/bootstrap-breakpoint.service';

@Directive({
  selector: '[appDynamicCollection]'
})
export class DynamicCollectionDirective implements OnInit, OnDestroy {
  constructor(private bootstrapBreakpoint: BootstrapBreakpointService) {
  }

  @Input()
  rowClassList: string[] = [];

  @HostBinding('class')
  hostClasses?: string;

  breakpoint$$?: Subscription;

  ngOnInit(): void {
    this.rowClassList.unshift('row');
    this.breakpoint$$ = this.bootstrapBreakpoint.observeLower('lg').subscribe((isMobile) => {
      if (isMobile) {
        this.hostClasses = 'list-group list-group-flush';
      } else {
        this.hostClasses = this.rowClassList.join(' ');
      }
    });
  }

  ngOnDestroy(): void {
    this.breakpoint$$?.unsubscribe();
  }
}
