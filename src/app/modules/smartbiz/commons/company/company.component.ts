import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import List from 'src/app/shared-modules/base/pages/list/list';
import { CompanyCategoryService } from 'src/app/_services/common/company-category.service';
import { CompanyService } from 'src/app/_services/common/company.service';
import { EmployeeNumberScaleService } from 'src/app/_services/common/employee-number-scale.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: [
    './company.component.scss',
    '../../../../shared-modules/base/pages/list/list.scss',
  ]
})
export class CompanyComponent extends List implements OnInit {

  employeeNumberScaleOptions$ = this.employeeNumberScale.options$();
  companyCategoryOptions$ = this.companyCategory.options$();


  constructor(
    public store: Store,
    public fb: FormBuilder,
    public _router: Router,
    public _service: CompanyService,
    public companyCategory: CompanyCategoryService,
    public employeeNumberScale: EmployeeNumberScaleService,
  ) {
    super(
      store,
      _router,
      _service,
      '/human-resource'
    );
  }

  filter = this.fb.group({
    query: [''],
    is_active: [''],
    company_category_id: [''],
    employee_number_scale_id: ['']
  });

  componentName = 'company';

  columns = {
    name(row) {
      return row.name;
    },
    company_category_id(row) {
      return row.company_category[0].name;
    },
    employee_number_scale_id(row) {
      return row.employee_number_scale[0].name;
    },
    slug(row) {
      return row.slug;
    },
    created_by(row) {
      return row.created_by;
    },
    modified_by(row) {
      return row.modified_by;
    }
  };

}
