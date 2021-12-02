import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { inputToBoolean } from '@_shared-modules/reusableRxjsPipe';

@Component({
  selector: 'app-international-phone',
  templateUrl: './international-phone.component.html',
  styleUrls: ['./international-phone.component.scss']
})
export class InternationalPhoneComponent implements OnInit {

  @Input() formName: FormGroup;
  @Input() label: string;
  @Input() name: string; @Input('ignore-label-case') ignoreLabelCase;
  @Input() appearance = 'standard';

  constructor() { }

  ngOnInit(): void {
    this.ignoreLabelCase = inputToBoolean(this.ignoreLabelCase);
  }

}
