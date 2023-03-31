import { Injectable } from '@angular/core';
import {StorageService} from "../../shared/feature/storage/storage.service";
import {BehaviorSubject, Observable} from "rxjs";
import {Skill} from "./skill";

@Injectable({
  providedIn: 'root'
})
export class SkillsDataService {
  private readonly data = new BehaviorSubject<Skill[]>([]);
  public get data$(): Observable<Skill[]> {
    return this.data.asObservable();
  }
  constructor(private readonly storage: StorageService) {
    this.update();
  }

  update(): void {
    const data: Skill[] = this.storage.get('skills', 'skill-list') || [];
    this.data.next(data);
  }

  create(skill: Skill): void {
    const data: Skill[] = this.storage.get('skills', 'skill-list') || [];
    data.push(skill);
    this.storage.set('skills', 'skill-list', data);
    this.update();
  }

  delete(index: number): void {
    const data: Skill[] = this.storage.get('skills', 'skill-list') || [];
    data.splice(index, 1);
    this.storage.set('skills', 'skill-list', data);
    this.update();
  }

  up(index: number): void {
    const data: Skill[] = this.storage.get('skills', 'skill-list') || [];
    const item = data.splice(index, 1)[0];
    data.splice(index - 1, 0, item);
    this.storage.set('skills', 'skill-list', data);
    this.update();
  }

  down(index: number): void {
    const data: Skill[] = this.storage.get('skills', 'skill-list') || [];
    const item = data.splice(index, 1)[0];
    data.splice(index + 1, 0, item);
    this.storage.set('skills', 'skill-list', data);
    this.update();
  }
}
