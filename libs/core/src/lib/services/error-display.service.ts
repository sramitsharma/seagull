import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ErrorDisplayService {

  constructor(private snakeBar: MatSnackBar) {
  }

  openSnackBar(errorMessage: string, messageType: string): void {
    this.snakeBar.open(errorMessage, undefined, {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: messageType
    });
  }
}
