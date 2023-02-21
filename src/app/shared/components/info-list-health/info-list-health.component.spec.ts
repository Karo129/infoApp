import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoListHealthComponent } from './info-list-health.component';

describe('InfoListHealthComponent', () => {
  let component: InfoListHealthComponent;
  let fixture: ComponentFixture<InfoListHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoListHealthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoListHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
