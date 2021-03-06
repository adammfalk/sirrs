import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @Input() opened: Boolean;
  @Input() isMobile: Boolean;
  @Output() closeSideNav = new EventEmitter<null>();

  ngOnInit(): void {
  }

  closeNav(): void {
    this.opened = false;
    this.closeSideNav.emit(null);
  }
}
