import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { HumanResourceNavComponent } from './header-nav/human-resource-nav/human-resource-nav.component';
import { MenuItemComponent } from './header-nav/human-resource-nav/menu-item/menu-item.component';
import { LayoutsRoutingModule } from './layouts-routing.module';



@NgModule({
  declarations: [
    HeaderNavComponent,
    HumanResourceNavComponent,
    MenuItemComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    MatButtonModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatDialogModule,
    MatPaginatorModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatTooltipModule,
    MatTabsModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatListModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSidenavModule
  ],
  exports: [
    HeaderNavComponent,
    HumanResourceNavComponent,
    MenuItemComponent
  ],
  providers: [

  ],
  entryComponents: [

  ]
})
export class LayoutsModule { }
