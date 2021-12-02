import { OnDestroy } from '@angular/core';
import { SubSink } from 'subsink';

export default class AutoUnsubscribe implements OnDestroy {
  constructor() { }
  subs = new SubSink();

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
