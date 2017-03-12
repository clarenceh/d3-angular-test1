import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import * as d3 from 'd3';

import { City } from './cities/cities.types';
import { CitiesService } from './cities/cities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cities: Observable<City[]>;

  title = 'app works!';

  constructor(private citiesService: CitiesService) {}

  ngOnInit() {
    this.cities = this.citiesService.getCities();
  }

}
