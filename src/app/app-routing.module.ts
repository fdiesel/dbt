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
    path: 'skills',
    loadChildren: () =>
      import('./skills/feature/skill-list/skill-list.module').then(
        (m) => m.SkillListModule
      )
  }, {
    path: 'settings',
    loadChildren: () =>
      import('./settings/feature/settings.module').then(
        (m) => m.SettingsModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
