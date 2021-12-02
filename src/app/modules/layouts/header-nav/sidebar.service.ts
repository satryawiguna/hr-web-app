import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  BreakpointObserver,
  BreakpointState,
  Breakpoints
} from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  showNav = false;
  sidenav;
  isHandset = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );
  constructor(
    private breakpointObserver: BreakpointObserver,
  ) { }

  setNav(sidenav) {
    this.sidenav = sidenav;
  }
}
