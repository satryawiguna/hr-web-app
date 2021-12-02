import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Logged } from '../../app.global';

@Component({
  selector: 'app-smartbiz',
  templateUrl: './smartbiz.component.html'
})
export class SmartbizComponent implements OnInit {

  constructor(private _router: Router) { }
  app: any;

  ngOnInit(): void {
    this.app = Logged.getAppRedirect();
    let url: string;

    if (this.app) {
      url = this.app + '/dashboard';
    } else {
      url = 'human-resource/dashboard';
    }

    this._router.navigate([url]);
  }

}
