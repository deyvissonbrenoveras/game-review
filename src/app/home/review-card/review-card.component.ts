import { Component, Input, OnInit } from '@angular/core';
import { Review } from 'src/app/shared/review.model';
@Component({
  selector: 'gr-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.css'],
})
export class ReviewCardComponent implements OnInit {
  @Input() review: Review;

  constructor() {}

  ngOnInit(): void {}
}
