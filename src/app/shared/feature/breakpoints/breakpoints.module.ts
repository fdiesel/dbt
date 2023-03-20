import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxBreakpointConfig, NgxBreakpointsModule} from "ngx-breakpoints";

const config: NgxBreakpointConfig = {
  breakpoints: {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
  },
  mobileBreakpoint: 'lg',
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxBreakpointsModule.forRoot(config)
  ],
  exports: [NgxBreakpointsModule]
})
export class BreakpointsModule { }
