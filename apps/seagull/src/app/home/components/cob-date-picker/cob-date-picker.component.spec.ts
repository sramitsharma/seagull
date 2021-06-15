import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CobDatePickerComponent} from './cob-date-picker.component';

describe('CobDatePickerComponent', () => {
  let component: CobDatePickerComponent;
  let fixture: ComponentFixture<CobDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CobDatePickerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CobDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
