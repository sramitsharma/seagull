import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetFightComponent } from './tweet-fight.component';

describe('TweetFightComponent', () => {
  let component: TweetFightComponent;
  let fixture: ComponentFixture<TweetFightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TweetFightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetFightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
