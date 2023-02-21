import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoListTechComponent } from './info-list-tech.component';

describe('InfoListTechComponent', () => {
  let component: InfoListTechComponent;
  let fixture: ComponentFixture<InfoListTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoListTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoListTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
