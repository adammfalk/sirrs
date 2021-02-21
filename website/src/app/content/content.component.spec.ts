import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ContentComponent } from './content.component';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

import { MatSidenavHarness } from '@angular/material/sidenav/testing';

describe('ContentComponent', () => {
  let component: ContentComponent;
  let loader: HarnessLoader;
  let fixture: ComponentFixture<ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        RouterTestingModule
      ],
      declarations: [ContentComponent]
    })
      .compileComponents();
    fixture = TestBed.createComponent(ContentComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create', () => {
    const contentCmp = fixture.componentInstance;
    expect(contentCmp).toBeTruthy();
  });

  it('should have the sidenav closed when it loads', async () => {
    const sidenav = await loader.getHarness(MatSidenavHarness);
    const isOpen = await sidenav.isOpen();
    expect(isOpen).toBeFalse();
  });

  it('should open the sidenav when the opened prop changes', async () => {
    fixture.componentInstance.opened = true;
    const sidenav = await loader.getHarness(MatSidenavHarness);
    const isOpen = await sidenav.isOpen();
    expect(isOpen).toBeTrue();
  });

  it('should close the sidenav when the opened prop is changed to false', async () => {
    fixture.componentInstance.opened = true;
    let sidenav = await loader.getHarness(MatSidenavHarness);
    let isOpen = await sidenav.isOpen();
    expect(isOpen).toBeTrue();

    fixture.componentInstance.opened = false;
    sidenav = await loader.getHarness(MatSidenavHarness);
    isOpen = await sidenav.isOpen();
    expect(isOpen).toBeFalse();
  });

  it('should have the right number of nav options', async () => {
    expect(fixture.componentInstance.navList.length).toBe(7);
  });
});
