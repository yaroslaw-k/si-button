import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundEffectsComponent } from './sound-effects.component';

describe('SoundEffectsComponent', () => {
  let component: SoundEffectsComponent;
  let fixture: ComponentFixture<SoundEffectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoundEffectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundEffectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
