import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SwipeOptionsService {
  public readonly swipe = new Subject<void>();
}
