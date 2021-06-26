import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSelectComponent } from './portfolio-select.component';

describe('PortfolioSelectComponent', () => {
  let component: PortfolioSelectComponent;
  let fixture: ComponentFixture<PortfolioSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortfolioSelectComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
