import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {WorkerComponent} from './worker/worker.component';
import {ProfessionComponent} from './profession/profession.component';
import {CityComponent} from './city/city.component';
import {CountryComponent} from './country/country.component';


const routes: Routes = [{
  path: '', component: HomeComponent
}, {
  path: 'workers',
  component: WorkerComponent
}, {
  path: 'professions', component: ProfessionComponent
}, {path: 'cities', component: CityComponent},
  {path: 'countries', component: CountryComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
