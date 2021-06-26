import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorDisplayService } from './error-display.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorLogService {
  constructor(private errorDisplayService: ErrorDisplayService) {
  }

  logError(error: any): void {
    const { message, status } = error;
    const errorDate = new Date().toISOString();

    if (status && status >= 400 && status < 500) {
      console.error(errorDate, `Client side error:`);
    } else if (status && status >= 500 && status < 600) {
      console.error(errorDate, `Server side error:`);
    }
    if (error && error instanceof HttpErrorResponse) {
      console.error(errorDate, 'There was an HTTP error.', message, 'Status code:', (error as HttpErrorResponse).status);
    } else if (error && error instanceof TypeError) {
      console.error(errorDate, 'There was a Type error.', message);
    } else if (error && error instanceof Error) {
      console.error(errorDate, 'There was a general error.', message);
    } else {
      console.error(errorDate, 'Nobody threw an error but something happened!', error);
    }

    this.displayError(message);
  }

  private displayError(errorMessage: string): void {
    this.errorDisplayService.openSnackBar(errorMessage, 'errorMessageDisplay');
  }
}
