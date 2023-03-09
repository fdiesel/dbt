import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {StressDataService} from "./stress-data.service";
import {StressLevelEntry} from "./stress-level-entry";
import {EChartsOption} from "echarts";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-stress',
  templateUrl: './stress.component.html',
})
export class StressComponent implements OnInit {
  constructor(private dataService: StressDataService) {
  }

  showAdd$ = new BehaviorSubject(false);

  data$!: Observable<StressLevelEntry[]>;

  selectedDate$ = new BehaviorSubject(new Date());

  chartOption$!: Observable<EChartsOption>;

  ngOnInit(): void {
    this.data$ = this.dataService.data$.pipe(
      map((data) => data.reverse())
    );
    this.chartOption$ = this.dataService.data$.pipe(
      map((data) => {
        return this.createChartOptions(
          data.map(item => new Date(item.date).toISOString().substring(11, 16)),
          data.map(item => item.level)
        )
      })
    );
    this.update();
  }

  createChartOptions(xAxisData: any[], seriesData: any[]): EChartsOption {
    return {
      xAxis: {
        type: 'category',
        data: xAxisData,
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: 100,
      },
      series: [
        {
          type: 'line',
          data: seriesData,
        },
      ],
    }
  }

  nextDay(): void {
    this.selectedDate$.next(
      new Date(this.selectedDate$.getValue().setDate(this.selectedDate$.getValue().getDate() + 1))
    );
    this.update();
  }

  prevDay(): void {
    this.selectedDate$.next(
      new Date(this.selectedDate$.getValue().setDate(this.selectedDate$.getValue().getDate() - 1))
    );
    this.update();
  }

  update(): void {
    this.dataService.update(this.selectedDate$.getValue().toISOString().substring(0, 10));
  }

  add(entry: StressLevelEntry): void {
    this.showAdd$.next(false);
    this.dataService.add(entry);
  }

  remove(date: string): void {
    this.dataService.remove(date);
  }
}
