import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';

import { NavbarComponent } from './navbar.component';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatButtonHarness } from '@angular/material/button/testing';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let loader: HarnessLoader;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        MatToolbarModule
      ],
      declarations: [NavbarComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render default title on desktop', () => {
    component.isMobile = false;
    expect(component.title()).toBe('Society of Iowa Rugby Referees');
  });

  it('should render mobile title on mobile', () => {
    component.isMobile = true;
    expect(component.title()).toBe('mobile');
  });

  it('should have a menu button', async () => {
    const navbarLoader = await loader.getChildLoader('.navbar');
    const menu = await navbarLoader.getHarness(MatButtonHarness.with({ selector: '#menu-button' }));
    expect(menu).toBeDefined();
  });

  it('should have a button on the title', async () => {
    const navbarLoader = await loader.getChildLoader('.navbar');
    const title = await navbarLoader.getHarness(MatButtonHarness.with({ selector: '#title-button' }));
    expect(title).toBeDefined();
  });

  it('should have a facebook button on the navbar', async () => {
    const navbarLoader = await loader.getChildLoader('.navbar');
    const fb = await navbarLoader.getHarness(MatButtonHarness.with({ selector: '#facebook-button' }));
    expect(fb).toBeDefined();
  });

  it('should emit true from sidenav toggle when the button goes from menu to close', async () => {
    spyOn(component.sideNavToggle, 'emit');

    component.menuIconName = 'menu';

    const navbarLoader = await loader.getChildLoader('.navbar');
    const menu = await navbarLoader.getHarness(MatButtonHarness.with({ selector: '#menu-button' }));
    await menu.click();

    expect(component.menuIconName).toBe('close');
    expect(component.sideNavToggle.emit).toHaveBeenCalledWith(true);
  });

  it('should emit false from sidenav toggle when the button goes from close to menu', async () => {
    spyOn(component.sideNavToggle, 'emit');

    component.menuIconName = 'close';

    const navbarLoader = await loader.getChildLoader('.navbar');
    const menu = await navbarLoader.getHarness(MatButtonHarness.with({ selector: '#menu-button' }));
    await menu.click();

    expect(component.menuIconName).toBe('menu');
    expect(component.sideNavToggle.emit).toHaveBeenCalledWith(false);
  });

  it('should reset to menu and send a close call when closeAll is called', async () => {
    spyOn(component.sideNavToggle, 'emit');
    spyOn(component, 'close');

    component.closeAll();

    expect(component.menuIconName).toBe('menu');
    expect(component.sideNavToggle.emit).toHaveBeenCalledWith(false);
    expect(component.close).toHaveBeenCalled();
  });

  it('should have called closeAll when goHome is called', async () => {
    spyOn(component, 'closeAll');

    component.goHome();

    expect(component.closeAll).toHaveBeenCalled();
  });
});
