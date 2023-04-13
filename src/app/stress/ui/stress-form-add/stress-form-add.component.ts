import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {StressLevelEntry} from "../../data-access/stress-level-entry";

@Component({
  selector: 'app-stress-form-add',
  templateUrl: './stress-form-add.component.html',
})
export class StressFormAddComponent {
  constructor(private readonly formBuilder: FormBuilder) {
  }

  form = this.formBuilder.group({
    date: [new Date().toISOString(), [Validators.required]],
    level: [50, [Validators.required]],
    mood: [50, [Validators.required]],
    comment: ['']
  })

  @Output()
  onSave = new EventEmitter<StressLevelEntry>();

  submit(): void {
    if (this.form.valid) {
      this.onSave.emit({
        date: this.form.value.date!,
        level: this.form.value.level!,
        mood: this.form.value.mood!,
        comment: this.form.value.comment!,
      });
    }
  }
}
