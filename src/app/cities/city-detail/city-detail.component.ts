import { Component, OnInit, Input } from '@angular/core';

import { City } from '../cities.types';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit {

  @Input() city: City;

  constructor() { }

  ngOnInit() {
  }

}
