import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FoodComponent} from "./food/feature/food.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'stress'
  }, {
    path: 'stress',
    loadChildren: () =>
      import('./stress/feature/stress.module').then(
        (m) => m.StressModule
      )
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
