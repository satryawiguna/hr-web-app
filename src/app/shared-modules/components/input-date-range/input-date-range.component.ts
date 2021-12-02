import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import AutoUnsubscribe from '@_shared-modules/base/pages/auto-unsubscribe/auto-unsubscribe';

@Component({
  selector: 'app-input-date-range',
  templateUrl: './input-date-range.component.html',
  styleUrls: ['./input-date-range.component.scss']
})
export class InputDateRangeComponent extends AutoUnsubscribe implements OnInit {

  @Input() formName: FormGroup;
  @Input() label: string;
  @Input() name: string;

  isEmpty = true;
  constructor() {
    super();
  }

  clear() {
    this.formName.get(this.name).reset('');
  }
  ngOnInit(): void {
    this.subs.sink = this.formName.get(this.name).valueChanges.subscribe(data => {
      this.isEmpty = (data === '');
    });

  }

}
