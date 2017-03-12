import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import * as d3 from 'd3';

import { City } from './cities.types';

@Injectable()
export class CitiesService {

  constructor() { }

  getCities(): Observable<City[]> {

    return Observable.create(function (observer) {

      d3.csv(`./assets/data/cities.csv`, function (err, data) {

        if (err) {
          observer.error(err);
        } else {
          observer.next(data);
        }

        observer.complete();

      });

    });

  }

}
