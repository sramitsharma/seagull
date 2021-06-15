import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { HomePageState, validCobSelector } from '../../reducers/home-page.reducer';
import { homePageActionTypes } from '../../actions';

@Component({
  selector: 'seagull-cob-date-picker',
  templateUrl: './cob-date-picker.component.html',
  styleUrls: ['./cob-date-picker.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CobDatePickerComponent implements OnInit {
  validCobList: string[] = [];
  validDateFilter: any;
  cobDateForm = this.formBuilder.group({
    validCob: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder, private homePageStateStore: Store<HomePageState>) {
    this.homePageStateStore.dispatch(homePageActionTypes.loadValidCob());
  }

  dateClass = (inputDate: Date) => {
    const inputDateStr = this.getFormattedDate(inputDate);
    return this.validCobList.includes(inputDateStr) ? 'enabledDate' : 'disabledDate';
  }

  ngOnInit(): void {
    this.homePageStateStore.select(validCobSelector).subscribe(validCobs => {
      this.validCobList = validCobs ? Object.keys(validCobs) : [];
    });
    this.validDateFilter = (inputDate: Date | null): boolean => {
      const inputDateStr = this.getFormattedDate(new Date());
      return this.validCobList.includes(inputDateStr);
    };
  }

  getFormattedDate(inputDate: Date): string {
    return inputDate.getFullYear() + '-' + (inputDate.getMonth() + 1) + '-' + inputDate.getDate();
  }

  onCobSelect(event: MatDatepickerInputEvent<Date>): void {
    if (this.cobDateForm.valid) {
      const selectedCob = event.value;
      this.homePageStateStore.dispatch(homePageActionTypes.onCobSelect({selectedCob}));
    }
  }
}
