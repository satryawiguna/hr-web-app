import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import AutoUnsubscribe from '@_shared-modules/base/pages/auto-unsubscribe/auto-unsubscribe';
import * as moment from 'moment';
import { map } from 'rxjs/operators';
import { inputToBoolean } from './../../reusableRxjsPipe';

export const DefaultFormat = {
  parse: {
    dateInput: 'YYYY/MM/DD',
  },
  display: {
    dateInput: 'DD - MM - YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};
@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss']
})
export class InputDateComponent extends AutoUnsubscribe implements OnInit {

  @Input() formName: FormGroup;
  @Input() label: string;
  @Input() name: string;
  @Input('ignore-label-case') ignoreLabelCase;

  isEmpty = true;
  //  default 100 years in the past at 1 january
  @Input('min-date') minDate = new Date(new Date().getFullYear() - 100, 0, 1);
  // default today
  @Input('max-date') maxDate = new Date();

  constructor() {
    super();
  }

  clear() {
    this.formName.get(this.name).reset('');
  }

  ngOnInit(): void {
    this.ignoreLabelCase = inputToBoolean(this.ignoreLabelCase);
    this.subs.sink = this.formName.get(this.name).valueChanges.subscribe(data => {
      this.isEmpty = (data === '');
    });
  }
}

/**
 * this function is made for managing 2 reactive form that has start and end date selection
 * @param params is object that has AbstractControl of start & end
 * @param params has optional defined maxDate, and yearsInterval
 * @return subscribable startDate change detection,
 * @return object minDate & maxDate for end date selection
 */
export const setMinMaxDate = (params: { start: AbstractControl, end: AbstractControl, maxDate?: Date, yearsInterval?: number, }) => {
  const { start, end } = params;
  end.disable();

  return start.valueChanges.pipe(
    map((val: string) => {
      let minDate = new Date();
      let maxDate = params.maxDate ?? new Date();
      if (val === '') {
        end.disable();
      } else {
        minDate = new Date(val);
        maxDate = params.maxDate ?? new Date(minDate.getFullYear() + params.yearsInterval ?? 100, 11, 31);
        end.enable();
      }
      return { minDate, maxDate };
    }));
};

export const apiDateFormat = (value) => value ? moment(value).format('YYYY-MM-DD HH:mm:ss') : null;
export const dateFormat = (value) => value ? moment(value).format('DD-MM-YYYY') : null;
