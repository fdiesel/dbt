import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FoodComponent} from './food.component';
import {FormsModule} from "@angular/forms";
import {DaySelectorModule} from "../../shared/ui/day-selector/day-selector.module";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: FoodComponent
  }
]

@NgModule({
  declarations: [
    FoodComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    DaySelectorModule,
  ]
})
export class FoodModule {
}
