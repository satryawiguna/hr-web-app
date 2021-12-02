import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import AutoUnsubscribe from '../../base/pages/auto-unsubscribe/auto-unsubscribe';
import { inputToBoolean } from './../../reusableRxjsPipe';

@Component({
  selector: 'app-select-instant',
  templateUrl: './select-instant.component.html',
  styleUrls: ['./select-instant.component.scss']
})
export class SelectInstantComponent extends AutoUnsubscribe implements OnInit {
  @Input() formName: FormGroup;
  @Input() name: string;
  @Input() label: string;
  @Input('ignore-label-case') ignoreLabelCase;
  @Input() options: Array<any>;


  constructor() {
    super();
  }

  ngOnInit(): void {
    this.ignoreLabelCase = inputToBoolean(this.ignoreLabelCase);
  }

}
