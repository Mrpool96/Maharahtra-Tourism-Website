import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RajgadComponent } from './rajgad.component';

describe('RajgadComponent', () => {
  let component: RajgadComponent;
  let fixture: ComponentFixture<RajgadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RajgadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RajgadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
