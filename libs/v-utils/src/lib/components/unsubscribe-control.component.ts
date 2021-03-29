import {Directive, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';

@Directive()
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export abstract class UnsubscribeControlComponent implements OnDestroy {

  destroyed$ = new Subject<void>();

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}
