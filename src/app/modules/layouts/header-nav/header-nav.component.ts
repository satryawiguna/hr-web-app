import { Component, OnInit } from '@angular/core';
import { SidebarService } from './sidebar.service';
import { trigger, transition, animate, style } from '@angular/animations';
import { DialogComponent } from 'src/app/shared-modules/components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import AutoUnsubscribe from 'src/app/shared-modules/base/pages/auto-unsubscribe/auto-unsubscribe';
import { switchMap, filter } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('200ms ease-in', style({ transform: 'translateY(0%)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateY(-100%)' }))
      ])
    ])
  ]
})
export class HeaderNavComponent extends AutoUnsubscribe implements OnInit {

  user;
  showToolbar = false;
  showNav = false;

  constructor(
    public sidebar: SidebarService,
    public dialog: MatDialog,
    public router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
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
      switchMap(() => this.router.navigate(['logout']))).subscribe();
  }

}
