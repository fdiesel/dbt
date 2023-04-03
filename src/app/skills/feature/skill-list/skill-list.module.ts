import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {SkillListComponent} from "./skill-list.component";
import {SwipeDeleteModule} from "../../../shared/ui/swipe-delete/swipe-delete.module";
import {NgxSwipeOptionsModule} from "ngx-swipe-options";

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
    NgxSwipeOptionsModule,
  ]
})
export class SkillListModule {
}
