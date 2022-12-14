import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryStatrsComponent } from './country-statrs.component';

describe('CountryStatrsComponent', () => {
  let component: CountryStatrsComponent;
  let fixture: ComponentFixture<CountryStatrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryStatrsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryStatrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
