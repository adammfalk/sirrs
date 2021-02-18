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

  toggle(): void {
    if (this.menuIconName === 'menu') {
      this.menuIconName = 'close';
      this.sideNavToggle.emit(true);
    } else {
      this.menuIconName = 'menu';
      this.sideNavToggle.emit(false);
    }
  }

  menuIcon(): string {
    return this.menuIconName;
  }
}
