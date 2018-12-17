import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() closeEmiiter = new EventEmitter();
  @Output() termSearchEmiiter = new EventEmitter();

  searchFormGroup : FormGroup;
  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit() {
   this.setForm();
  }

  setForm = () => {
    this.searchFormGroup = this.formBuilder.group({
      search : []
    });
  }
  hide = () => {
    this.closeEmiiter.next();
  }

  termSearched = () => {
    let term = this.searchFormGroup.value;
    this.termSearchEmiiter.next(term);
  }

}
