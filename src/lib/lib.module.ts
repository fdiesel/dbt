import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink, RouterLinkActive} from "@angular/router";

import {LocalDateTimePipe} from './util/local-date-time.pipe';
import {LocalDatePipe} from './util/local-date.pipe';
import {LocalStringPipe} from './util/local-string.pipe';
import {RangePipe} from './util/range.pipe';
import {RepeatDirective} from './feature/repeat.directive';
import {UpdatePromptComponent} from "./feature/update-prompt/update-prompt.component";
import {PopUpCardComponent} from './feature/pop-up-card/pop-up-card.component';
import {NavbarComponent} from './feature/navbar/navbar.component';
import {NavLinkComponent} from './feature/navbar/nav-link/nav-link.component';
import {NgxBreakpointConfig, NgxBreakpointsModule} from "ngx-breakpoints";
import {AccordionButtonDirective} from "./feature/dynamic/accordion-button.directive";
import {AccordionItemDirective} from "./feature/dynamic/accordion-item.directive";

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
  declarations: [
    AccordionButtonDirective,
    AccordionItemDirective,
    UpdatePromptComponent,
    LocalDateTimePipe,
    LocalDatePipe,
    RangePipe,
    LocalStringPipe,
    RepeatDirective,
    PopUpCardComponent,
    NavbarComponent,
    NavLinkComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    RouterLinkActive,
    NgxBreakpointsModule.forRoot(config),
  ],
  exports: [
    AccordionButtonDirective,
    AccordionItemDirective,
    UpdatePromptComponent,
    LocalDateTimePipe,
    LocalDatePipe,
    RangePipe,
    LocalStringPipe,
    RepeatDirective,
    PopUpCardComponent,
    NavbarComponent,
    NavLinkComponent,
  ],
})
export class LibModule {
}
