import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';
import { BootstrapBreakpointService } from '../../feature/bootstrap-breakpoint.service';

@Component({
  selector: 'app-dynamic-sidebar-view',
  templateUrl: './dynamic-sidebar-view.component.html',
})
export class DynamicSidebarViewComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private breakpointService: BootstrapBreakpointService) {
  }

  @Input()
  paramName = 'id';

  view$!: Observable<'full' | 'sidebar' | 'content'>;
  selected$!: Observable<boolean>;
  showSidebar$!: Observable<boolean>;
  showContent$!: Observable<boolean>;
  fullSidebar$!: Observable<boolean>;
  fullContent$!: Observable<boolean>;

  ngOnInit(): void {
    this.view$ = combineLatest([
      this.observeRouteParam(),
      this.breakpointService.observeLower('lg'),
    ]).pipe(
      map(([param, isMobile]) => {
        if (isMobile && param) {
          return 'content';
        } else if (isMobile && !param) {
          return 'sidebar';
        } else {
          return 'full';
        }
      }),
    );
    this.selected$ = this.observeRouteParam().pipe(
      map((param) => !!param),
    );
    this.showSidebar$ = this.view$.pipe(
      map(view => view === 'full' || view === 'sidebar'),
    );
    this.showContent$ = this.view$.pipe(
      map(view => view === 'full' || view === 'content'),
    );
    this.fullSidebar$ = this.view$.pipe(
      map(view => view === 'sidebar'),
    );
    this.fullContent$ = this.view$.pipe(
      map(view => view === 'content'),
    );
  }

  private observeRouteParam(): Observable<string | null> {
    return this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      startWith(this.router),
      map(() => this.activatedRoute.snapshot.paramMap.get(this.paramName)),
    );
  }
}
