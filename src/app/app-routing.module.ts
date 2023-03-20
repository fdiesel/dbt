import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StressComponent} from "./stress/feature/stress.component";
import {FoodComponent} from "./food/feature/food.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'stress'
  }, {
    path: 'stress',
    component: StressComponent
  }, {
    path: 'food',
    component: FoodComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
