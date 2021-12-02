import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss']
})
export class InputPasswordComponent implements OnInit {

  @Input() formName: FormGroup;
  @Input() label: string;
  @Input() name: string;

  hide = true;

  constructor() { }

  ngOnInit(): void {
  }

}
