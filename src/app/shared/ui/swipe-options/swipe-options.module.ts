import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SwipeOptionsComponent} from './swipe-options.component';
import {CdkDrag, CdkDragPlaceholder, CdkDragPreview, CdkDropList, CdkDropListGroup} from "@angular/cdk/drag-drop";


@NgModule({
  declarations: [
    SwipeOptionsComponent
  ],
  exports: [
    SwipeOptionsComponent
  ],
  imports: [
    CommonModule,
    CdkDrag,
    CdkDropList,
    CdkDropListGroup,
    CdkDragPlaceholder,
    CdkDragPreview
  ]
})
export class SwipeOptionsModule {
}
