import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HciCheckboxesComponent } from './hci-checkboxes.component';

describe('HciCheckboxesComponent', () => {
  let component: HciCheckboxesComponent;
  let fixture: ComponentFixture<HciCheckboxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HciCheckboxesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HciCheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
