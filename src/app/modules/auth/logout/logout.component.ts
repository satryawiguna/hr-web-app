import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../_services/auth/auth.service';


@Component({
  selector: 'app-logout',
  template: '',
})
export class LogoutComponent implements OnInit, AfterViewInit {

  constructor(
    private _router: Router,
    private _authService: AuthService,
  ) {
  }

  ngOnInit(): void {

    // reset login credential
    this._authService.logout().subscribe();
    this._router.navigate(['login']);
  }

  ngAfterViewInit() {

  }

}
