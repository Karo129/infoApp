import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoListFavComponent } from './info-list-fav.component';

describe('InfoListFavComponent', () => {
  let component: InfoListFavComponent;
  let fixture: ComponentFixture<InfoListFavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoListFavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoListFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
