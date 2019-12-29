import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-insta-input',
  templateUrl: './insta-input.component.html',
  styleUrls: ['./insta-input.component.scss']
})
export class InstaInputComponent implements OnInit {
  show: boolean = false;
  value = '';
  @Output() valueChanged = new EventEmitter<string>();

  private _searchInput: ElementRef;
  get searchInput(): ElementRef {
    return this._searchInput;
  }

  @ViewChild('searchInput', { static: false})
  set searchInput(value: ElementRef) {
    this._searchInput = value;

    if (this.searchInput) {
      if (this.show) {
        this.searchInput.nativeElement.focus();
      }
    }
  }
 
  onInputOpen(): void {
    this.show = true;
    if ( this.searchInput) {
      this.searchInput.nativeElement.focuss();
    }
  }

  onInputClose(): void {
    this.show = false;
  }

  onInputChanged(): void {
    this.valueChanged.emit(this.value);
  }

  ngOnInit(): void {

  }
}
