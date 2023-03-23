import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

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
    loadChildren: () =>
      import('./food/feature/food.module').then(
        (m) => m.FoodModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
