import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HarnessLoader } from '@angular/cdk/testing';

import { MatButtonHarness } from '@angular/material/button/testing';
import { MatSidenavHarness } from '@angular/material/sidenav/testing';

let loader: HarnessLoader;
let fixture;

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        MatButtonModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const app = fixture.componentInstance;
    expect(compiled.querySelector('.navbar-title').textContent).toBe(app.title);
  });

  it('should have a footer with a junky copyright date', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const app = fixture.componentInstance;
    expect(compiled.querySelector('.footer-title').textContent).toBe(app.footerTitle())
  });

  it('should have the sidenav closed when it loads', async () => {
    const sidenav = await loader.getHarness(MatSidenavHarness);
    const isOpen = await sidenav.isOpen();
    expect(isOpen).toBeFalse();
  });

  it('should have a menu button', async () => {
    const navbarLoader = await loader.getChildLoader('.navbar');
    const menu = await navbarLoader.getHarness(MatButtonHarness.with({ selector: '#menu-button' }));
    expect(menu).toBeDefined();
  });

  it('should have a facebook button on the navbar', async () => {
    const navbarLoader = await loader.getChildLoader('.navbar');
    const fb = await navbarLoader.getHarness(MatButtonHarness.with({ selector: '#facebook-button' }));
    expect(fb).toBeDefined();
  });
});
