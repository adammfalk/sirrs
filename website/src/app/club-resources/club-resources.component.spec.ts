import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClubResourcesComponent } from './club-resources.component';

describe('ClubResourcesComponent', () => {
  let component: ClubResourcesComponent;
  let fixture: ComponentFixture<ClubResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClubResourcesComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
