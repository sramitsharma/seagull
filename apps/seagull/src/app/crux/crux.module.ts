import { ModuleWithProviders, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthGuard } from '@core/gaurds/AuthGuard';
import { ErrorLogService } from '@core/services/error-log.service';
import { AppInterceptorService } from '@core/services/app-interceptor.service';

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatNativeDateModule,
  MatOptionModule,
  MatCardModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatDialogModule,
  MatRadioModule,
  MatSelectModule,
  MatDatepickerModule,
  MatInputModule,
  MatFormFieldModule
];

@NgModule({
  imports: [],
  exports: [MATERIAL_MODULES, ReactiveFormsModule, CommonModule, HttpClientModule, FormsModule],
  providers: [AuthGuard]
})

export class CruxModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: CruxModule,
      providers: [
        ErrorLogService,
        { provide: HTTP_INTERCEPTORS, useClass: AppInterceptorService, multi: true }
      ]
    };
  }
}
