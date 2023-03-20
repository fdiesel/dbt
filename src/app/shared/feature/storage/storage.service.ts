import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {
  }

  get(table: Table, key: string): any | undefined {
    const str = localStorage.getItem(`${table}-${key}`);
    return str ? JSON.parse(str) : undefined;
  }

  set(table: Table, key: string, value: any): void {
    localStorage.setItem(`${table}-${key}`, JSON.stringify(value));
  }
}

export enum Table {
  STRESS = 'stress',
  FOOD = 'food'
}
