import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { inputToBoolean } from './../../reusableRxjsPipe';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {

  @Input() formName: FormGroup;
  @Input() label: string;
  @Input() name: string; @Input('ignore-label-case') ignoreLabelCase;
  @Input() type: 'text' | 'email' | 'number' = 'text';
  @Input() min = 0;
  @Input() max = 1000000000;
  @Input() textarea = false;
  @Input('text-area-min-rows') textAreaMinRows = 8;
  @Input() appearance = 'standard';
  @Input() prefix: string;
  @Input() suffix: string;

  constructor() { }

  ngOnInit(): void {
    this.ignoreLabelCase = inputToBoolean(this.ignoreLabelCase);
  }

}
