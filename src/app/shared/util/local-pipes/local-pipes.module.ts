import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LocalDatePipe} from "./local-date.pipe";
import {LocalDateTimePipe} from "./local-date-time.pipe";
import {LocalStringPipe} from "./local-string.pipe";



@NgModule({
  declarations: [
    LocalDatePipe,
    LocalDateTimePipe,
    LocalStringPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LocalDatePipe,
    LocalDateTimePipe,
    LocalStringPipe,
  ]
})
export class LocalPipesModule { }
