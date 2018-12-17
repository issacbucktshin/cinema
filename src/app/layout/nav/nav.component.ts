import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() showActionIcons: boolean
  @Output() searchEmitter = new EventEmitter();
  search: boolean;
  term: string;
  constructor() { }

  ngOnInit() {
  }

  searchTerm = (term: string) => {
    this.searchEmitter.next(term.search);
  }

}
