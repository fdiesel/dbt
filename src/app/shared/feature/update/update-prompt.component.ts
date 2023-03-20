import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UpdateService } from './update';

@Component({
  selector: 'app-update-prompt',
  templateUrl: './update-prompt.component.html',
})
export class UpdatePromptComponent implements OnInit {
  constructor(private service: UpdateService) {
  }

  show$?: Observable<boolean>;

  ngOnInit(): void {
    this.show$ = this.service.getShowUpdatePrompt$();
  }

  install(): void {
    this.service.update();
  }
}
