import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUpdateService } from '../../service-workers/app-update';

@Component({
  selector: 'app-update-prompt',
  templateUrl: './update-prompt.component.html',
})
export class UpdatePromptComponent implements OnInit {
  constructor(private service: AppUpdateService) {
  }

  show$?: Observable<boolean>;

  ngOnInit(): void {
    this.show$ = this.service.getShowUpdatePrompt$();
  }

  update(): void {
    this.service.update();
  }
}
