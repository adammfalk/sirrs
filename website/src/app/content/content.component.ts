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

  navList = [
    { name: 'Home', iconName: 'home', link: '/home' },
    { name: 'Assignments', iconName: 'assignment', link: '/assignments' },
    { name: 'Directory', iconName: 'contact_page', link: '/directory' },
    { name: 'Match Reports', iconName: 'assignment_turned_in', link: '/match-reports' },
    { name: 'Resources', iconName: 'room_service', link: '/resources' },
    { name: 'Society Information', iconName: 'info', link: '/society-information' },
    { name: 'Officers', iconName: 'supervisor_account', link: '/officers' }
  ];
}
