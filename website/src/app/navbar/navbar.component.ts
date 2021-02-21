import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuIconName = 'menu';
  title = 'Society of Iowa Rugby Referees';
  @Output() sideNavToggle = new EventEmitter<Boolean>();

  constructor () { }

  ngOnInit(): void {
  }

  // toggles the menu from a click on the button
  toggle(): void {
    if (this.menuIconName === 'menu') {
      this.menuIconName = 'close';
      this.sideNavToggle.emit(true);
    } else {
      this.closeAll();
    }
  }

  // the close event came from somewhere else so just reset the icon
  close(): void {
    this.menuIconName = 'menu';
  }

  // exposes the property for the button icon
  menuIcon(): string {
    return this.menuIconName;
  }

  // clicking the title takes you home
  goHome(): void {
    this.closeAll();
  }

  // bundled the close activities together
  closeAll(): void {
    this.close();
    this.sideNavToggle.emit(false);
  }
}
