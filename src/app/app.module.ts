import {NgModule, isDevMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {ServiceWorkerModule} from '@angular/service-worker';
import {FooterComponent} from './footer/footer.component';
import {UpdateModule} from "./shared/feature/update/update.module";
import {NavbarModule} from "./shared/ui/navbar/navbar.module";
import {StressModule} from "./stress/feature/stress.module";
import {FoodModule} from "./food/feature/food.module";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    UpdateModule,
    NavbarModule,
    StressModule,
    FoodModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
