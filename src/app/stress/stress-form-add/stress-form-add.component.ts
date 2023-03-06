import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-stress-form-add',
  templateUrl: './stress-form-add.component.html',
})
export class StressFormAddComponent {

  @Output()
  onSave = new EventEmitter<{ date: string, level: number }>();
  date = new Date().toISOString();
  level = 50;

  save(): void {
    this.onSave.emit({
      date: this.date,
      level: this.level
    });
  }
}
