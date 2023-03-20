import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccordionButtonDirective} from "./accordion-button.directive";
import {AccordionItemDirective} from "./accordion-item.directive";



@NgModule({
  declarations: [AccordionButtonDirective, AccordionItemDirective],
  imports: [
    CommonModule
  ],
  exports: [AccordionButtonDirective, AccordionItemDirective]
})
export class AccordionModule { }
