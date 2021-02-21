import { Component, ChangeDetectorRef, OnDestroy, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  public opened: Boolean;
  @ViewChild(NavbarComponent) navbar: NavbarComponent;
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor (changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  onToggle(opened: Boolean) {
    this.opened = opened;
  }

  onClose(close: null) {
    this.opened = false;
    this.navbar.close();
  }
}
