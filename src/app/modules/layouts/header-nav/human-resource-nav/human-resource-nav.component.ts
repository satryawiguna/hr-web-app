import { Logged } from 'src/app/app.global';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from '../sidebar.service';
import { MenuBarService } from '../menu-bar.service';
import { DialogComponent } from 'src/app/shared-modules/components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import AutoUnsubscribe from 'src/app/shared-modules/base/pages/auto-unsubscribe/auto-unsubscribe';
import { filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-human-resource-nav',
  templateUrl: './human-resource-nav.component.html',
  styleUrls: ['./human-resource-nav.component.scss']
})
export class HumanResourceNavComponent extends AutoUnsubscribe implements OnInit, AfterViewInit {
  model;
  router;
  user;
  roles;
  public show = false;

  @ViewChild('sidenav', { static: true }) public sidenav;

  constructor(
    private _router: Router,
    public sidebar: SidebarService,
    public menubar: MenuBarService,
    private dialog: MatDialog
  ) {
    super();
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.roles = JSON.parse(localStorage.getItem('roles'));
    this.model = {
      human_resource_navigation: JSON.parse(localStorage.getItem('navbar')),
      user_information: Logged.getUserInformation()
    };

    this.router = this._router.url;
  }

  ngAfterViewInit() {
    this.sidebar.setNav(this.sidenav);
  }

  public signOut() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: `Are You Sure?`,
        body: `You will be exit this application!`,
        btnYes: `Yes, logout!`,
        btnNo: `No`
      },
    });

    this.subs.sink = dialogRef.afterClosed().pipe(
      filter(res => res === true),
      switchMap(() => this._router.navigate(['logout']))).subscribe();
  }
}
