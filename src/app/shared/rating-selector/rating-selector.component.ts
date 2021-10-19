import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gr-rating-selector',
  templateUrl: './rating-selector.component.html',
  styleUrls: ['./rating-selector.component.css'],
})
export class RatingSelectorComponent implements OnInit {
  @Output() rated = new EventEmitter<number>();

  rates: number[] = [1, 2, 3, 4, 5];
  rate: number = 0;
  previousRate: any;

  constructor() {}

  ngOnInit(): void {}

  setRate(r: number) {
    this.rate = r;
    this.previousRate = undefined;
    this.rated.emit(this.rate);
  }
  setTemporaryRate(r: number) {
    if (this.previousRate === undefined) {
      this.previousRate = this.rate;
    }
    this.rate = r;
  }
  clearTemporaryRate() {
    if (this.previousRate !== undefined) {
      this.rate = this.previousRate;
      this.previousRate = undefined;
    }
  }
}
