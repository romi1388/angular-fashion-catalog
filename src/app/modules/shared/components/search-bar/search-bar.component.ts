import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() searchValue : EventEmitter<string> = new EventEmitter<string>();
  private _searchItem ;
  get searchItem(): string {
    return this._searchItem;
  }
  set searchItem(value) {
    this._searchItem = value;
    this.searchValue.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
