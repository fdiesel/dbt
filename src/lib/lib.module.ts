import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink, RouterLinkActive} from "@angular/router";

import {AccordionButtonDirective} from './feature/dynamic/accordion-button.directive';
import {AccordionItemDirective} from './feature/dynamic/accordion-item.directive';
import {DesktopClassListDirective} from './feature/dynamic/desktop-class-list.directive';
import {DesktopOnlyDirective} from './feature/dynamic/desktop-only.directive';
import {MobileAttrListDirective} from './feature/dynamic/mobile-attr-list.directive';
import {MobileClassListDirective} from './feature/dynamic/mobile-class-list.directive';
import {MobileOnlyDirective} from './feature/dynamic/mobile-only.directive';
import {DynamicSidebarViewComponent} from './ui/dynamic-sidebar-view/dynamic-sidebar-view.component';
import {CatchNotAvailablePipe} from './util/catch-not-available.pipe';
import {DynamicWidthDirective} from './util/dynamic-width.directive';
import {LocalDateTimePipe} from './util/local-date-time.pipe';
import {LocalDatePipe} from './util/local-date.pipe';
import {LocalStringPipe} from './util/local-string.pipe';
import {NavBackComponent} from './util/nav-back/nav-back.component';
import {RangePipe} from './util/range.pipe';
import {RepeatDirective} from './feature/repeat.directive';
import {DynamicCardDirective} from './util/dynamic-card.directive';
import {DynamicMapComponent} from './ui/dynamic-map/dynamic-map.component';
import {DynamicMapItemComponent} from './ui/dynamic-map/dynamic-map-item/dynamic-map-item.component';
import {CollectionViewComponent} from './ui/collection-view/collection-view.component';
import {SelectionDirective} from './ui/selection/selection.directive';
import {SelectionItemDirective} from './ui/selection/selection-item.directive';
import {DynamicCollectionDirective} from './ui/dynamic-collection/dynamic-collection.directive';
import {DynamicCollectionItemDirective} from './ui/dynamic-collection/dynamic-collection-item.directive';
import {UpdatePromptComponent} from "./feature/update-prompt/update-prompt.component";
import {PopUpCardComponent} from './feature/pop-up-card/pop-up-card.component';
import {NavbarComponent} from './feature/navbar/navbar.component';
import {NavLinkComponent} from './feature/navbar/nav-link/nav-link.component';


@NgModule({
  declarations: [
    UpdatePromptComponent,
    AccordionButtonDirective,
    AccordionItemDirective,
    DesktopClassListDirective,
    DesktopOnlyDirective,
    MobileAttrListDirective,
    MobileClassListDirective,
    MobileOnlyDirective,
    DynamicSidebarViewComponent,
    NavBackComponent,
    LocalDateTimePipe,
    LocalDatePipe,
    RangePipe,
    LocalStringPipe,
    CatchNotAvailablePipe,
    RepeatDirective,
    DynamicCardDirective,
    DynamicWidthDirective,
    DynamicMapComponent,
    DynamicMapItemComponent,
    CollectionViewComponent,
    SelectionDirective,
    SelectionItemDirective,
    DynamicCollectionDirective,
    DynamicCollectionItemDirective,
    PopUpCardComponent,
    NavbarComponent,
    NavLinkComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    RouterLinkActive,
  ],
  exports: [
    UpdatePromptComponent,
    AccordionButtonDirective,
    AccordionItemDirective,
    DesktopClassListDirective,
    DesktopOnlyDirective,
    MobileAttrListDirective,
    MobileClassListDirective,
    MobileOnlyDirective,
    DynamicSidebarViewComponent,
    NavBackComponent,
    LocalDateTimePipe,
    LocalDatePipe,
    RangePipe,
    LocalStringPipe,
    CatchNotAvailablePipe,
    RepeatDirective,
    DynamicCardDirective,
    DynamicWidthDirective,
    DynamicMapComponent,
    DynamicMapItemComponent,
    CollectionViewComponent,
    SelectionDirective,
    SelectionItemDirective,
    DynamicCollectionDirective,
    DynamicCollectionItemDirective,
    PopUpCardComponent,
    NavbarComponent,
    NavLinkComponent,
  ],
})
export class LibModule {
}
