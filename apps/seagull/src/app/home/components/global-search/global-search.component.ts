import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { SearchDialogComponent } from '../search-dialog/search-dialog.component';

@Component({
  selector: 'seagull-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.scss']
})
export class GlobalSearchComponent {
  searchResult: any;
  constructor(public dialog: MatDialog) {
  }

  openSearchDialog(): void {
    const dialogRef = this.dialog.open(SearchDialogComponent, {
      maxHeight: '100vh',
      maxWidth: '100vw',
      height: '100vh',
      width: '100vw',
      panelClass: 'custom-dialog-container',
      backdropClass: 'backdropBackground'
    });
    dialogRef.afterClosed();
  }
}
