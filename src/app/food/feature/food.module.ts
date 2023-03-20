import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FoodComponent} from './food.component';
import {FormsModule} from "@angular/forms";
import {DaySelectorModule} from "../../shared/ui/day-selector/day-selector.module";


@NgModule({
  declarations: [
    FoodComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DaySelectorModule,
  ],
  exports: [
    FoodComponent
  ]
})
export class FoodModule {
}
