import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { dataSeries } from './dataSeries';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  series: Array<Serie> = [];
  promedio: number=0;
  constructor(private serieService: SerieService) { }

  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      this.getAverage(series)
    });
  }

  getAverage(series:Serie[]){
    this.promedio=0
    let totalSeasons: number = 0;
    let numberOfSeries: number =0;
    series.forEach((serie) => {
      totalSeasons = totalSeasons + serie.seasons
      numberOfSeries=numberOfSeries+1
      });
      this.promedio =totalSeasons/numberOfSeries;

  }
  ngOnInit() {
    this.getSeries();
  }

}
