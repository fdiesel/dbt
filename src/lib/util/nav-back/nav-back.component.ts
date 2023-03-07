import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-back',
  templateUrl: './nav-back.component.html',
  styleUrls: [],
})
export class NavBackComponent {

  constructor(private location: Location) {
  }

  back(): void {
    this.location.back();
  }
}
