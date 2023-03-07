import { Injectable } from '@angular/core';
import {StressLevelEntry} from "./stress-level-entry";
import {BehaviorSubject, Observable} from "rxjs";
import {StorageService, Table} from "../storage.service";

@Injectable({
  providedIn: 'root'
})
export class StressDataService {

  constructor(private storage: StorageService) { }

  private isoDate = new BehaviorSubject<string>(new Date().toISOString().substring(0, 10));
  private data = new BehaviorSubject<StressLevelEntry[]>([]);

  public get date$(): Observable<string> {
    return this.isoDate.asObservable();
  }
  public get data$(): Observable<StressLevelEntry[]> {
    return this.data.asObservable();
  }

  public update(isoDate: string): void {
    this.isoDate.next(isoDate)
    this.data.next(this.storage.get(Table.STRESS, this.isoDate.getValue()) || [])
  }

  public add(entry: StressLevelEntry): void {
    const key = entry.date.substring(0, 10);
    const currentValue: StressLevelEntry[] = this.storage.get(Table.STRESS, key) || [];
    currentValue.push(entry);
    currentValue.sort((a: StressLevelEntry, b: StressLevelEntry) => a.date < b.date ? 1 : -1);
    this.storage.set(Table.STRESS, key, currentValue);
    this.update(this.isoDate.getValue());
  }

  public remove(date: string): void {
    const key = date.substring(0, 10);
    const currentValue: StressLevelEntry[] = this.storage.get(Table.STRESS, key) || [];
    const index = currentValue.findIndex((item: any) => item.date === date);
    currentValue.splice(index, 1);
    this.storage.set(Table.STRESS, key, currentValue);
    this.update(this.isoDate.getValue());
  }
}
