import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { BehaviorSubject, interval, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UpdateService {

  private showUpdatePrompt$ = new BehaviorSubject(false);

  constructor(private readonly updates: SwUpdate) {
    this.checkForUpdate();
    // check for update every 60 seconds
    interval(60 * 1000).subscribe(() => this.checkForUpdate());
  }

  private checkForUpdate(): void {
    this.updates.checkForUpdate().then((isAvailable) => {
      if (isAvailable) {
        this.showUpdatePrompt$.next(true);
      }
    });
  }

  public getShowUpdatePrompt$(): Observable<boolean> {
    return this.showUpdatePrompt$.asObservable();
  }

  public update(): void {
    this.updates.activateUpdate().then(() => document.location.reload());
  }
}
