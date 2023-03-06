import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {StorageService, Table} from "../storage.service";

@Component({
  selector: 'app-stress',
  templateUrl: './stress.component.html',
})
export class StressComponent implements OnInit {
  constructor(private storage: StorageService) {
  }

  showAdd$ = new BehaviorSubject(false);

  stress: {date: string, level: number}[] = [];

  date = new Date();

  ngOnInit(): void {
    this.updateStressLevel();
  }

  updateStressLevel(): void {
    const key = this.date.toISOString().substring(0, 10);
    this.stress = this.storage.get(Table.STRESS, key) || [];
  }

  addStressLevel(value: {date: string, level: number}): void {
    this.showAdd$.next(false);
    const key = value.date.substring(0, 10);
    const currentValue = this.storage.get(Table.STRESS, key) || [];
    currentValue.push(value);
    currentValue.sort((a: string, b: string) => a < b);
    this.storage.set(Table.STRESS, key, currentValue);
    this.updateStressLevel();
  }

  removeStressLevel(value: {date: string, level: number}): void {
    const key = value.date.substring(0, 10);
    const currentValue = this.storage.get(Table.STRESS, key) || [];
    const index = currentValue.findIndex((item: any) => item.date === value.date);
    currentValue.splice(index, 1);
    this.storage.set(Table.STRESS, key, currentValue);
    this.updateStressLevel();
  }
}
