import {NgModule} from '@angular/core';
import {CdkDrag, CdkDragPlaceholder, CdkDragPreview, CdkDropList, CdkDropListGroup} from "@angular/cdk/drag-drop";
import {CdkScrollable} from "@angular/cdk/overlay";
import {CommonModule} from '@angular/common';
import {SwipeOptionsComponent} from './swipe-options.component';


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
    CdkDragPreview,
    CdkScrollable
  ]
})
export class SwipeOptionsModule {
}
