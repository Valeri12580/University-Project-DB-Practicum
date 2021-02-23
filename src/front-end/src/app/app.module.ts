import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import {HomeComponent} from './home/home.component';
import {SharedModule} from "./shared/shared.module";
import {CityComponent} from "./city/city.component";
import {ProfessionComponent} from "./profession/profession.component";
import {CountryComponent} from "./country/country.component";
import {WorkerComponent} from "./worker/worker.component";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CityComponent,
    ProfessionComponent,
    CountryComponent
    , WorkerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
   HttpClientModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule {
}
