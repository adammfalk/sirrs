import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuIconName = 'menu';
  title = 'Society of Iowa Rugby Referees';
  @Output() open = new EventEmitter<any>();
  @Output() close = new EventEmitter<any>();

  constructor () { }

  ngOnInit(): void {
  }

  toggle(): void {
    if (this.menuIconName === 'menu') {
      this.menuIconName = 'close';
      this.open.emit(null);
    } else {
      this.menuIconName = 'menu';
      this.close.emit(null);
    }
  }

  menuIcon(): string {
    return this.menuIconName;
  }
}
