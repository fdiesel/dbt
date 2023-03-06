import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {LibModule} from "../lib/lib.module";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StressComponent} from './stress/stress.component';
import { StressFormAddComponent } from './stress/stress-form-add/stress-form-add.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    StressComponent,
    StressFormAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LibModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
