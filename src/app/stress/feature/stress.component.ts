import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {StressDataService} from "../data-access/stress-data.service";
import {StressLevelEntry} from "../data-access/stress-level-entry";
import {EChartsOption} from "echarts";
import {map} from "rxjs/operators";
import {NGX_ECHARTS_CONFIG} from "ngx-echarts";

@Component({
  selector: 'app-stress',
  templateUrl: './stress.component.html',
  providers: [{
    provide: NGX_ECHARTS_CONFIG,
    useFactory: () => ({echarts: () => import('echarts')})
  }]
})
export class StressComponent implements OnInit {
  constructor(private dataService: StressDataService) {
  }

  showAdd$ = new BehaviorSubject(false);

  data$!: Observable<StressLevelEntry[]>;

  day$!: BehaviorSubject<string>;

  chartOption$!: Observable<EChartsOption>;

  ngOnInit(): void {
    this.day$ = this.dataService.day;
    this.data$ = this.dataService.data$.pipe(
      map((data) => data.reverse())
    );
    this.chartOption$ = this.dataService.data$.pipe(
      map((data) => {
        return this.createChartOptions(
          data.map(item => [item.date, item.level]),
          data.map(item => [item.date, item.mood]),
        )
      })
    );
    this.dataService.update();
  }

  createChartOptions(stressData: [string, number][], moodData: [string, number][]): EChartsOption {
    return {
      xAxis: {
        type: 'time',
        axisLabel: {
          formatter: (date: any) => new Date(date).toLocaleTimeString().substring(0, 5),
        },
        min: `${this.day$.getValue()}T04:00:00.000Z`,
        max: `${this.day$.getValue()}T22:00:00.000Z`,
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: 100,
      },
      series: [
        {
          type: 'line',
          color: 'red',
          data: stressData,
        }, {
          type: 'line',
          color: 'green',
          data: moodData,
        }
      ],
    }
  }

  add(entry: StressLevelEntry): void {
    this.showAdd$.next(false);
    this.dataService.add(entry);
  }

  remove(date: string): void {
    this.dataService.remove(date);
  }
}
