import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from "./navbar.component";
import {NavLinkComponent} from "./nav-link/nav-link.component";
import {RouterModule} from "@angular/router";
import {BreakpointsModule} from "../../feature/breakpoints/breakpoints.module";


@NgModule({
  declarations: [NavbarComponent, NavLinkComponent],
  imports: [
    CommonModule,
    RouterModule,
    BreakpointsModule
  ],
  exports: [NavbarComponent, NavLinkComponent]
})
export class NavbarModule {
}
