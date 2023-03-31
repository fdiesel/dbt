import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {
  }

  get(table: string, key: string): any | undefined {
    const str = localStorage.getItem(`${table}-${key}`);
    return str ? JSON.parse(str) : undefined;
  }

  set(table: string, key: string, value: any): void {
    localStorage.setItem(`${table}-${key}`, JSON.stringify(value));
  }
}
