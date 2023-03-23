import { Injectable } from '@angular/core';
import {StressLevelEntry} from "./stress-level-entry";
import {BehaviorSubject, Observable} from "rxjs";
import {StorageService, Table} from "../../shared/feature/storage/storage.service";

@Injectable({
  providedIn: 'root'
})
export class StressDataService {

  constructor(private storage: StorageService) {
    this.day.subscribe(() => this.update());
  }

  public readonly day = new BehaviorSubject<string>(new Date().toISOString().substring(0, 10));
  private readonly data = new BehaviorSubject<StressLevelEntry[]>([]);
  public get data$(): Observable<StressLevelEntry[]> {
    return this.data.asObservable();
  }

  public update(): void {
    this.data.next(this.storage.get(Table.STRESS, this.day.getValue()) || [])
  }

  public add(entry: StressLevelEntry): void {
    const key = entry.date.substring(0, 10);
    const currentValue: StressLevelEntry[] = this.storage.get(Table.STRESS, key) || [];
    currentValue.push(entry);
    currentValue.sort((a: StressLevelEntry, b: StressLevelEntry) => a.date.localeCompare(b.date));
    this.storage.set(Table.STRESS, key, currentValue);
    this.update();
  }

  public remove(date: string): void {
    const key = date.substring(0, 10);
    const currentValue: StressLevelEntry[] = this.storage.get(Table.STRESS, key) || [];
    const index = currentValue.findIndex((item: any) => item.date === date);
    currentValue.splice(index, 1);
    this.storage.set(Table.STRESS, key, currentValue);
    this.update();
  }
}
