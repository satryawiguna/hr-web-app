import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import AutoUnsubscribe from '@_shared-modules/base/pages/auto-unsubscribe/auto-unsubscribe';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent extends AutoUnsubscribe implements OnInit {
  @Input() formName: FormGroup;
  @Input() name: string;
  @Input() label = '';
  @Input() options: Array<any>;
  @Input() display: string;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
