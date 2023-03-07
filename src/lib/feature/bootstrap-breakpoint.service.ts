import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BootstrapBreakpointService {
  constructor(private breakpointObserver: BreakpointObserver) {
  }

  private breakpoints = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
  };

  public observeGreater(size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'): Observable<boolean> {
    return this.breakpointObserver.observe(this.minWidth(size)).pipe(
      map((breakpointState: BreakpointState) => breakpointState.matches),
    );
  }

  public observeLower(size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'): Observable<boolean> {
    return this.breakpointObserver.observe(this.maxWidth(size)).pipe(
      map((breakpointState: BreakpointState) => breakpointState.matches),
    );
  }

  private minWidth(size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'): string {
    return `(min-width: ${this.breakpoints[size]}px)`;
  }

  private maxWidth(size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'): string {
    return `(max-width: ${this.breakpoints[size]}px)`;
  }
}
