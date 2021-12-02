import { tap } from 'rxjs/operators';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControlName, FormControl } from '@angular/forms';
import { Observable, merge } from 'rxjs';
import AutoUnsubscribe from '../../base/pages/auto-unsubscribe/auto-unsubscribe';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent extends AutoUnsubscribe implements OnInit {
  @Input() formName: FormGroup;
  @Input() label: string;
  @Input() name: string;
  @Input() affectedFields: Array<FormControl> = [];


  constructor() {
    super();
  }

  ngOnInit(): void {
    if (this.affectedFields.length > 0) {
      if (!this.formName.get(this.name).value) {
        this.affectedFields.forEach(fc => {
          fc.disable();
        });
      }
      this.subs.sink = this.formName.get(this.name).valueChanges.pipe(
        tap(cb => this.affectedFields.map(fc => {
          if (cb) {
            fc.enable();
          } else {
            fc.setValue('');
            fc.disable();
          }
        }))
      ).subscribe();
    }
  }
}
