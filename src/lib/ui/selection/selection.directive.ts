import { Directive, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: 'ul[appSelection]'
})
export class SelectionDirective implements OnInit {
  @HostBinding('class')
  hostClasses?: string;

  ngOnInit(): void {
    // this.hostClasses = 'nav nav-pills flex-column';
    this.hostClasses = 'list-group list-group-flush';
  }
}
