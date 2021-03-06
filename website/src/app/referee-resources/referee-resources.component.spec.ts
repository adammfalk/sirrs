import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefereeResourcesComponent } from './referee-resources.component';

describe('RefereeResourcesComponent', () => {
  let component: RefereeResourcesComponent;
  let fixture: ComponentFixture<RefereeResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefereeResourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefereeResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
