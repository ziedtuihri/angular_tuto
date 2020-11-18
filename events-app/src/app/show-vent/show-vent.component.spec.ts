import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowVentComponent } from './show-vent.component';

describe('ShowVentComponent', () => {
  let component: ShowVentComponent;
  let fixture: ComponentFixture<ShowVentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowVentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowVentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
