import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioListenerComponent } from './bio-listener.component';

describe('BioListenerComponent', () => {
  let component: BioListenerComponent;
  let fixture: ComponentFixture<BioListenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioListenerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BioListenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
