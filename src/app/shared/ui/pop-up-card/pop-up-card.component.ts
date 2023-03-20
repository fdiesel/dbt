import {Component, Input, EventEmitter, OnInit, Output, OnDestroy} from '@angular/core';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-pop-up-card',
  templateUrl: './pop-up-card.component.html',
  styleUrls: ['./pop-up-card.component.sass'],
})
export class PopUpCardComponent implements OnInit, OnDestroy {

  @Input()
  show$!: Observable<boolean>;

  @Input()
  showCancel = false;

  @Output()
  cancel = new EventEmitter<void>();

  renderContent$ = new BehaviorSubject(false);
  show$$!: Subscription;

  ngOnInit(): void {
    this.show$$ = this.show$.subscribe((show) => {
      if (show) {
        this.renderContent$.next(true);
      } else {
        setTimeout(() => {
          this.renderContent$.next(false);
        }, 400);
      }
    })
  }

  ngOnDestroy(): void {
    this.show$$.unsubscribe();
  }

  hide(): void {
    this.cancel.emit();
  }
}
