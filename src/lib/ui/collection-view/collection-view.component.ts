import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-collection-view',
  templateUrl: './collection-view.component.html',
})
export class CollectionViewComponent {
  @Input()
  query$?: Subject<string>;
}
