import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsModule, NoopNgxsExecutionStrategy } from '@ngxs/store';
import { AuthState, DatatableState, FormState } from '@_state';
import { ToastrModule } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { LayoutsModule } from './modules/layouts/layouts.module';
import { ModulesRoutingModule } from './modules/modules-routing.module';
import { ModulesComponent } from './modules/modules.component';
import { DialogComponent } from './shared-modules/components/dialog/dialog.component';
import { AuthGuard } from './_guards/auth.guard';
import { LoggedGuard } from './_guards/logged.guard';
import { HeaderInteceptor } from './_services/auth/header.interceptor';
import { selectInstantState } from './_state/select-instant/select-instant.state';



@NgModule({
  declarations: [
    AppComponent,
    ModulesComponent,
    DialogComponent,
  ],
  imports: [
    AuthModule,
    LayoutsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ModulesRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    ToastrModule.forRoot(),
    NgxsModule.forRoot([DatatableState, AuthState, FormState, selectInstantState], {
      developmentMode: !environment.production,
      executionStrategy: NoopNgxsExecutionStrategy,
    }),

    NgxsStoragePluginModule.forRoot({
      key: [AuthState],
      serialize: obj => btoa(JSON.stringify(obj)),
      deserialize: obj => JSON.parse(atob(obj)),
    }),

    NgxsFormPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot({ disabled: environment.production }),
    NgxsLoggerPluginModule.forRoot({ disabled: environment.production }),

  ],
  entryComponents: [
    DialogComponent,
  ],
  providers: [
    AuthGuard,
    LoggedGuard,
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {
        hasBackdrop: true,
        width: 400
      }
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInteceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
