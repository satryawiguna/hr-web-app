import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { ContentLoaderModule } from '@ngneat/content-loader';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';
import { InternationalPhoneNumberModule } from 'ngx-international-phone-number';
import { NgxMatIntlTelInputModule } from 'ngx-mat-intl-tel-input';

import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ControlMessagesComponent } from './components/control-message.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { FilterSidebarComponent } from './components/filter-sidebar/filter-sidebar.component';
import { InputDateRangeComponent } from './components/input-date-range/input-date-range.component';
import { DefaultFormat, InputDateComponent } from './components/input-date/input-date.component';
import { InputPasswordComponent } from './components/input-password/input-password.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { SelectApiComponent } from './components/select-api/select-api.component';
import { SelectInstantComponent } from './components/select-instant/select-instant.component';
import { SelectMultipleComponent } from './components/select-multiple/select-multiple.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { InternationalPhoneComponent } from './components/international-phone/international-phone.component';

@NgModule({
  declarations: [
    ControlMessagesComponent,
    InputTextComponent,
    InputPasswordComponent,
    CheckboxComponent,
    DatatableComponent,
    SelectInstantComponent,
    SelectApiComponent,
    FilterSidebarComponent,
    InputDateComponent,
    UploadImageComponent,
    SelectMultipleComponent,
    RadioButtonComponent,
    InputDateRangeComponent,
    InternationalPhoneComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    RouterModule,
    MatSelectModule,
    MatCardModule,
    MatAutocompleteModule,
    NgSelectModule,
    ContentLoaderModule,
    MatCardModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatListModule,
    MatDividerModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatMenuModule,
    MatTabsModule,
    MatRadioModule,
    SatDatepickerModule,
    SatNativeDateModule,
    InternationalPhoneNumberModule,
    NgxMatIntlTelInputModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    RouterModule,
    MatSelectModule,
    MatCardModule,
    MatAutocompleteModule,
    NgSelectModule,
    ContentLoaderModule,
    MatCardModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatListModule,
    MatDividerModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatMenuModule,
    MatTabsModule,
    MatRadioModule,
    SatDatepickerModule,
    SatNativeDateModule,
    InternationalPhoneNumberModule,

    ControlMessagesComponent,
    InputTextComponent,
    InputDateComponent,
    InputPasswordComponent,
    CheckboxComponent,
    DatatableComponent,
    SelectInstantComponent,
    MatIconModule,
    SelectApiComponent,
    ContentLoaderModule,
    FilterSidebarComponent,
    UploadImageComponent,
    NgxsFormPluginModule,
    SelectMultipleComponent,
    RadioButtonComponent,
    InputDateRangeComponent,
    InternationalPhoneComponent,

  ],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: DefaultFormat },
    { provide: MAT_RADIO_DEFAULT_OPTIONS, useValue: { color: 'primary' } },
  ]
})
export class SharedModulesModule { }
