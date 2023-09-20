import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffyComponent } from './effy.component';

describe('PersonalInfoComponent', () => {
  let component: EffyComponent;
  let fixture: ComponentFixture<EffyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EffyComponent]
    });
    fixture = TestBed.createComponent(EffyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
