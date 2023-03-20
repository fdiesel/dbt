import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StressComponent} from "./stress/feature/stress.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'stress'
  }, {
    path: 'stress',
    component: StressComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
