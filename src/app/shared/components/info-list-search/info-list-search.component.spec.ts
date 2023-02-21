import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoListSearchComponent } from './info-list-search.component';

describe('InfoListSearchComponent', () => {
  let component: InfoListSearchComponent;
  let fixture: ComponentFixture<InfoListSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoListSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoListSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
