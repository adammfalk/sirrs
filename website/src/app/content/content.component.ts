import { Component, ChangeDetectorRef, OnDestroy, Input, EventEmitter, Output } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnDestroy {
  @Input() opened: Boolean;
  @Output() closeSideNav = new EventEmitter<null>();
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

  closeNav(): void {
    this.opened = false;
    this.closeSideNav.emit(null);
  }

}
