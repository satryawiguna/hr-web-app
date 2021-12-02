import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import AutoUnsubscribe from '@_shared-modules/base/pages/auto-unsubscribe/auto-unsubscribe';

@Component({
  selector: 'app-select-multiple',
  templateUrl: './select-multiple.component.html',
  styleUrls: ['./select-multiple.component.scss']
})
export class SelectMultipleComponent extends AutoUnsubscribe implements OnChanges {

  @Input() formName: FormGroup;
  @Input() name: string;
  @Input() label: string;
  @Input() options: Array<any>;
  @Input() data: any[] = [];
  @Output() getControls = new EventEmitter();

  form = this.fb.array([]);

  constructor(
    public fb: FormBuilder,
  ) {
    super();
  }

  ngOnChanges(): void {
    if (this.data.length > 0) {
      // initialize mat-select from edit component

      // initialize eventEmitter from edit component
      this.data.forEach(row =>
        this.onChangeMultipleSelect({
          isUserInput: true,
          source: {
            selected: true,
            value: row.id,
            viewValue: row.name,
            dataValue: row.value,
          }
        }
        ));
    }
  }

  onChangeMultipleSelect(event) {
    if (event.isUserInput) {
      if (event.source.selected) {
        const group = this.fb.group({
          data_ids: [event.source.value, Validators.required],
          data_name: [{
            value: event.source.viewValue,
            disabled: true
          }],
          data_value: [event.source.dataValue || '', Validators.required]
        });
        this.form.push(group);
        this.getControls.emit(this.form.controls);
      } else {
        this.form.controls.forEach((element, index) => {
          const val = element.value.data_ids;
          if (val === event.source.value) {
            this.form.removeAt(index);
          }
        });
      }
    }
  }

}
