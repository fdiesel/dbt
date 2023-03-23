import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from "./footer.component";
import {RouterLink, RouterLinkActive} from "@angular/router";


@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule {
}
