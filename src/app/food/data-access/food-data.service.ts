import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {FoodEntry} from "./food-entry";
import {StorageService} from "../../shared/feature/storage/storage.service";

@Injectable({
  providedIn: 'root'
})
export class FoodDataService {

  constructor(private storage: StorageService) {
    this.day.subscribe(() => this.update());
  }

  public day = new BehaviorSubject<string>(new Date().toISOString().substring(0, 10));
  private data = new BehaviorSubject<FoodEntry[]>([]);

  public get data$(): Observable<FoodEntry[]> {
    return this.data.asObservable();
  }

  public update(): void {
    const data = this.storage.get('food', this.day.getValue()) || [];
    this.data.next(data);
  }

  public add(name: string): void {
    const currentValue: FoodEntry[] = this.storage.get('food', this.day.getValue()) || [];
    currentValue.push({
      date: new Date().toISOString(),
      name,
    });
    currentValue.sort((a: FoodEntry, b: FoodEntry) => a.date.localeCompare(b.date));
    this.storage.set('food', this.day.getValue(), currentValue);
  }
}
