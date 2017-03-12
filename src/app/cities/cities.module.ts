import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitiesService } from './cities.service';
import { CitiesComponent } from './cities/cities.component';
import { CityDetailComponent } from './city-detail/city-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CitiesComponent,
    CityDetailComponent
  ],
  providers: [
    CitiesService
  ],
  exports: [
    CitiesComponent,
    CityDetailComponent
  ]
})
export class CitiesModule { }
