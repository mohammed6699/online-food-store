import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutComponenet } from './check-out-componenet';

describe('CheckOutComponenet', () => {
  let component: CheckOutComponenet;
  let fixture: ComponentFixture<CheckOutComponenet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckOutComponenet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckOutComponenet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
