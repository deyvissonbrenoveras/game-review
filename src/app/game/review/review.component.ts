import { Component, Input, OnInit } from '@angular/core';
import { Review } from 'src/app/shared/review.model';

@Component({
  selector: 'gr-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
})
export class ReviewComponent implements OnInit {
  @Input() review: Review;
  constructor() {}

  ngOnInit(): void {}
}
