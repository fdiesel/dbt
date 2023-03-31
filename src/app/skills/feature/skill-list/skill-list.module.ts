import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SkillListComponent} from "./skill-list.component";
import {SwipeDeleteModule} from "../../../shared/ui/swipe-delete/swipe-delete.module";
import {FormsModule} from "@angular/forms";
import {SwipeOptionsModule} from "../../../shared/ui/swipe-options/swipe-options.module";

const routes: Routes = [{
  path: '',
  component: SkillListComponent
}];

@NgModule({
  declarations: [
    SkillListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    SwipeDeleteModule,
    SwipeOptionsModule
  ]
})
export class SkillListModule {
}
