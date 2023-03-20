import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PopUpCardComponent} from "./pop-up-card.component";


@NgModule({
  declarations: [PopUpCardComponent],
  imports: [
    CommonModule
  ],
  exports: [PopUpCardComponent]
})
export class PopUpCardModule {
}
