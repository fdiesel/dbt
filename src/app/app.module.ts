import {NgModule, isDevMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {ServiceWorkerModule} from '@angular/service-worker';
import {UpdateModule} from "./shared/feature/update/update.module";
import {NavbarModule} from "./shared/ui/navbar/navbar.module";
import {FooterModule} from "./footer/feature/footer.module";
import {HeaderModule} from "./header/feature/header.module";

@NgModule({
  declarations: [
    AppComponent,
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
        FooterModule,
        HeaderModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
