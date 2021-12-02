import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { SidebarService } from '../../sidebar.service';
import { MenuBarService } from '../../menu-bar.service';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() items;
  @Input() parent;
  @Input() roles;
  @Input() class;
  @Input() padding;

  @ViewChild('childMenu', {static: true}) public childMenu: any;
  @ViewChild('childMenuMobile', {static: true}) public childMenuMobile: any;

  padding_style;
  padding_has_child_style;

  public showChild = false;
  public show = false;
  constructor(
    public sidebar: SidebarService,
    public menubar: MenuBarService
  ) { }

  ngOnInit(): void {
    const padding_has_child = this.convertToInt(this.padding) + this.convertToInt(16);
    this.padding_has_child_style = '0px ' + padding_has_child + 'px';
    this.padding_style = '0px ' + this.padding + 'px';
  }

  convertToInt(val) {
    return parseInt(val);
  }

}
