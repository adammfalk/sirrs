import { Component, OnInit } from '@angular/core';
import { RefInfo, Refs } from '../ref-info';


@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {

  constructor () { }

  ngOnInit(): void {
  }

  refs: RefInfo[] = Refs;
}
