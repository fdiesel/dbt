import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SwipeDeleteComponent} from './swipe-delete.component';
import {SwipeModule} from "../../util/swipe/swipe.module";


@NgModule({
  declarations: [
    SwipeDeleteComponent,
  ],
  imports: [
    CommonModule,
    SwipeModule
  ],
  exports: [
    SwipeDeleteComponent
  ]
})
export class SwipeDeleteModule {
}
