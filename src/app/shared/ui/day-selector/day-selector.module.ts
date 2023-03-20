import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DaySelectorComponent} from "./day-selector.component";



@NgModule({
  declarations: [DaySelectorComponent],
  imports: [
    CommonModule
  ],
  exports: [DaySelectorComponent]
})
export class DaySelectorModule { }
