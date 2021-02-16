import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  title = 'Society of Iowa Rugby Referees';

  constructor () { }

  ngOnInit(): void {
  }

  footerTitle(): string {
    return `© ${new Date().getFullYear()} ${this.title}`;
  }
}
