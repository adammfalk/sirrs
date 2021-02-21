import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HarnessLoader } from '@angular/cdk/testing';

let loader: HarnessLoader;
let fixture: ComponentFixture<AppComponent>;
let component: AppComponent;
let debugElement: DebugElement;

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
        AppComponent,
        NavbarComponent,
        ContentComponent,
        FooterComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
    debugElement = fixture.debugElement;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle true when the child event emits true', () => {
    component.opened = false;

    const navbarComponent: NavbarComponent = debugElement.query(By.directive(NavbarComponent)).componentInstance;
    navbarComponent.sideNavToggle.emit(true);

    expect(component.opened).toBeTrue();
  });

  it('should toggle false when the child event emits false', () => {
    component.opened = true;

    const navbarComponent: NavbarComponent = debugElement.query(By.directive(NavbarComponent)).componentInstance;
    navbarComponent.sideNavToggle.emit(false);

    expect(component.opened).toBeFalse();
  });
});
