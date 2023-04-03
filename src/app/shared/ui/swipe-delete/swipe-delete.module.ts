import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SwipeDeleteComponent} from './swipe-delete.component';
import {NgxSwipeOptionsModule} from "ngx-swipe-options";


@NgModule({
  declarations: [
    SwipeDeleteComponent,
  ],
    imports: [
        CommonModule,
        NgxSwipeOptionsModule
    ],
  exports: [
    SwipeDeleteComponent
  ]
})
export class SwipeDeleteModule {
}
