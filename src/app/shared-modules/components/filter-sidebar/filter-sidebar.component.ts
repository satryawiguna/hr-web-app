import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter-sidebar',
  templateUrl: './filter-sidebar.component.html',
  styleUrls: ['./filter-sidebar.component.scss']
})
export class FilterSidebarComponent implements OnInit {

  @Input() filter: FormGroup;
  @Input() filterNav;
  initValue;
  constructor() { }

  clear() {
    this.filter.reset(this.initValue);
  }

  ngOnInit(): void {
    this.initValue = this.filter.value;
  }

}
