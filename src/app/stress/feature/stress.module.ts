import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StressComponent} from "./stress.component";
import {NgxEchartsModule} from "ngx-echarts";
import {StressFormAddComponent} from "../ui/stress-form-add/stress-form-add.component";
import {FormsModule} from "@angular/forms";
import {PopUpCardModule} from "../../shared/ui/pop-up-card/pop-up-card.module";
import {AccordionModule} from "../../shared/ui/accordion/accordion.module";
import {RouterModule, Routes} from "@angular/router";
import {DaySelectorModule} from "../../shared/ui/day-selector/day-selector.module";
import {SwipeDeleteModule} from "../../shared/ui/swipe-delete/swipe-delete.module";
import {StressLeveColorPipe} from "../util/stress-leve-color.pipe";

const routes: Routes = [
  {
    path: '',
    component: StressComponent
  }
]

@NgModule({
  declarations: [
    StressComponent,
    StressFormAddComponent,
    StressLeveColorPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    PopUpCardModule,
    AccordionModule,
    DaySelectorModule,
    SwipeDeleteModule,
  ],
})
export class StressModule {
}
