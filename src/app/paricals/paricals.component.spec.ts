import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParicalsComponent } from './paricals.component';

describe('ParicalsComponent', () => {
  let component: ParicalsComponent;
  let fixture: ComponentFixture<ParicalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParicalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParicalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
