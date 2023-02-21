import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoListBusinessComponent } from './info-list-business.component';

describe('InfoListBusinessComponent', () => {
  let component: InfoListBusinessComponent;
  let fixture: ComponentFixture<InfoListBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoListBusinessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoListBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
