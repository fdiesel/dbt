import {Component, HostBinding, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {BootstrapBreakpointService} from '../../../feature/bootstrap-breakpoint.service';

@Component({
  selector: 'div[app-dynamic-map-item]',
  templateUrl: './dynamic-map-item.component.html',
})
export class DynamicMapItemComponent implements OnInit, OnDestroy {
  constructor(private bootstrapBreakpoint: BootstrapBreakpointService) {
  }

  @Input()
  accordionId?: string;

  @Input()
  itemId?: string;

  @Input()
  colClassList = ['col'];

  @HostBinding('class')
  hostClasses?: string;

  breakpoint$$?: Subscription;

  ngOnInit(): void {
    this.breakpoint$$ = this.bootstrapBreakpoint.observeLower('lg').subscribe((isMobile) => {
      if (isMobile) {
        this.hostClasses = 'accordion-item';
      } else {
        this.hostClasses = this.colClassList.join(' ');
      }
    });
  }

  ngOnDestroy(): void {
    this.breakpoint$$?.unsubscribe();
  }
}
