import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';

export interface FormStateModel {
  [componentName: string]: any;
}

@State<FormStateModel>({
  name: 'formState'
})
@Injectable()
export class FormState { }
