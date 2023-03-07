import {Component, EventEmitter, Output} from '@angular/core';
import {StressLevelEntry} from "../stress-level-entry";

@Component({
  selector: 'app-stress-form-add',
  templateUrl: './stress-form-add.component.html',
})
export class StressFormAddComponent {

  @Output()
  onSave = new EventEmitter<StressLevelEntry>();
  date = new Date().toISOString();
  level = 50;
  comment = '';

  save(): void {
    this.onSave.emit({
      date: this.date,
      level: this.level,
      comment: this.comment,
    });
    this.date = new Date().toISOString();
  }
}
