import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-day-selector',
  templateUrl: './day-selector.component.html',
})
export class DaySelectorComponent implements OnInit {
  date = new Date();

  @Output()
  onDateChange = new EventEmitter<string>();

  ngOnInit(): void {
    this.emit();
  }

  prev(): void {
    this.date = new Date(this.date.setDate(this.date.getDate() - 1));
    this.emit();
  }

  next(): void {
    this.date = new Date(this.date.setDate(this.date.getDate() + 1));
    this.emit();
  }

  emit(): void {
    this.onDateChange.emit(this.date.toISOString().substring(0, 10));
  }
}
