import { Component, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import Add from 'src/app/shared-modules/base/pages/add/add';
import { UrlValidation } from 'src/app/shared-modules/customValidation';
import { CompanyCategoryService } from 'src/app/_services/common/company-category.service';
import { CompanyService } from 'src/app/_services/common/company.service';
import { EmployeeNumberScaleService } from 'src/app/_services/common/employee-number-scale.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: [
    './add-company.component.scss',
    '../../../../../shared-modules/base/pages/add/add.scss',
  ]
})
export class AddCompanyComponent extends Add {

  companyCategoryOptions$ = this.companyCategory.options$(1);
  employeeNumberScaleOptions$ = this.employeeNumberScale.options$(1);


  constructor(
    public toastr: ToastrService,
    public el: ElementRef,
    public store: Store,
    public _service: CompanyService,
    public fb: FormBuilder,
    public companyCategory: CompanyCategoryService,
    public employeeNumberScale: EmployeeNumberScaleService
  ) {
    super(
      toastr,
      el,
      store,
      _service,
      fb.group({
        company_category_id: ['', [Validators.required]],
        employee_number_scale_id: ['', [Validators.required]],
        name: ['', [Validators.required]],
        isRequestSlug: [true],
        slug: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        url: ['', [Validators.required, UrlValidation]],
        // logo: ['', [Validators.required]],
        description: [''],
        media_libraries: [[], [Validators.required]],
      })
    );
  }

}
