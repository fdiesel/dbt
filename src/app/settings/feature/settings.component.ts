import {Component} from '@angular/core';
import {SettingsDataService} from "../data-access/settings-data.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent {
  constructor(private service: SettingsDataService) {
  }

  file = new BehaviorSubject<File | undefined>(undefined);

  setFile(event: Event): void {
    const files = (<HTMLInputElement>event.target).files;
    if (files && files.length > 0) {
      this.file.next(files[0]);
    }
  }

  import(): void {
    const file = this.file.getValue();
    if (file) {
      this.service.import(file);
    }
    this.file.next(undefined);
  }

  export(): void {
    this.service.export()
  }
}
