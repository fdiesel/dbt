import { Directive, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: 'li[appSelectionItem],a[appSelectionItem]'
})
export class SelectionItemDirective implements OnInit {
  @HostBinding('class')
  hostClasses?: string;

  ngOnInit(): void {
    // this.hostClasses = 'nav-link w-100 d-flex';
    this.hostClasses = 'list-group-item d-flex';
  }
}
