import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationMessage } from '../validation-message';

@Component({
  selector: 'app-control-messages',
  template: `
    <p *ngIf="errorMessage !== null">{{errorMessage}}</p>
  `
})
export class ControlMessagesComponent {
  @Input() control: FormControl;
  constructor() { }

  get errorMessage() {
    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationMessage.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }

    return null;
  }
}
