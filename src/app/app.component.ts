import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app works!';

  d3JsonObs = Observable.bindCallback(d3.json);

  ngOnInit() {

    d3.json('./assets/data/tweets.json', data => {
      console.log(JSON.stringify(data));
    });

    /*
    this.d3JsonObs('').subscribe(data => {
      console.log('Hello');
    });
    */

    this.d3test();

  }

  d3test() {

    const x = d3.scaleLinear()
              .domain([10, 130])
              .range([0, 960]);

    console.log(`x for 50: ${x(20)}`);

  }

}
