import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SwipeDeleteComponent} from './swipe-delete.component';
import {SwipeOptionsModule} from "../swipe-options/swipe-options.module";


@NgModule({
  declarations: [
    SwipeDeleteComponent,
  ],
    imports: [
        CommonModule,
        SwipeOptionsModule
    ],
  exports: [
    SwipeDeleteComponent
  ]
})
export class SwipeDeleteModule {
}
