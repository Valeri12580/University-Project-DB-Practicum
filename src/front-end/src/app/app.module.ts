import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {HomeComponent} from './home/home.component';
import {SharedModule} from './shared/shared.module';
import {CityComponent} from './city/city.component';
import {ProfessionComponent} from './profession/profession.component';
import {CountryComponent} from './country/country.component';
import {WorkerComponent} from './worker/worker.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CountryFormComponent} from './country-form/country-form.component';
import { CityFormComponent } from './city-form/city-form.component';
import { ProfessionFormComponent } from './profession-form/profession-form.component';
import { WorkerFormComponent } from './worker-form/worker-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CityComponent,
    ProfessionComponent,
    CountryComponent
    , WorkerComponent, CountryFormComponent, CityFormComponent, ProfessionFormComponent, WorkerFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule {
}
