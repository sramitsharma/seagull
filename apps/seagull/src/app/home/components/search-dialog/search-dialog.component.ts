import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'seagull-search-dialog',
  templateUrl: './search-dialog.component.html',
  styleUrls: ['./search-dialog.component.scss']
})
export class SearchDialogComponent implements OnInit {
  globalSearchForm = this.formBuilder.group({
    search: ['', Validators.required],
  });

  constructor(public dialogRef: MatDialogRef<SearchDialogComponent>,
              private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: string) {
  }

  ngOnInit(): void {
  }

  closeSearchDialog(): void {
    this.dialogRef.close();
  }

  onSearch(): void {
    const word = this.globalSearchForm.value.search;
    if (word.length > 3) {
      window.open(`https://twitter.com/search?q=${word}&src=typed_query`,
        '_blank', 'nofollow noreferrer noopener');
    }
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.onSearch();
    }
  }
}
