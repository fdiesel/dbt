import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'nav[app-navbar]',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  @HostBinding('class')
  hostClasses = 'navbar navbar-expand-lg';
}
