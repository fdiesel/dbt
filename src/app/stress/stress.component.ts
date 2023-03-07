import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {StressDataService} from "./stress-data.service";
import {StressLevelEntry} from "./stress-level-entry";

@Component({
  selector: 'app-stress',
  templateUrl: './stress.component.html',
})
export class StressComponent implements OnInit {
  constructor(private dataService: StressDataService) {
  }

  showAdd$ = new BehaviorSubject(false);

  data$!:  Observable<StressLevelEntry[]>;

  ngOnInit(): void {
    this.data$ = this.dataService.data$;
    this.dataService.update(new Date().toISOString().substring(0, 10));
  }

  add(entry: StressLevelEntry): void {
    this.showAdd$.next(false);
    this.dataService.add(entry);
  }

  remove(date: string): void {
    this.dataService.remove(date);
  }
}
