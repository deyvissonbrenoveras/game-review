import { Component, OnInit } from '@angular/core';
import { GamesService } from './games.service';
import { Game } from '../shared/game.model';
import { Review } from '../shared/review.model';
import { ReviewsService } from './reviews.service';

@Component({
  selector: 'gr-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  games: Game[] = [];
  reviews: Review[] = [];
  reviewBlock1: Review[] = [];
  reviewBlock2: Review[] = [];
  reviewBlock3: Review[] = [];
  constructor(
    private gameService: GamesService,
    private reviewService: ReviewsService
  ) {}

  ngOnInit(): void {
    this.gameService.games().subscribe((games) => (this.games = games));

    this.reviewService.reviews().subscribe((reviews) => {
      const sortedReviews: Review[] = reviews.sort((a: Review, b: Review) => {
        if (a.rating < b.rating) {
          return 1;
        }
        if (a.rating > b.rating) {
          return -1;
        }
        return 0;
      });
      this.reviewBlock1 = sortedReviews.splice(0, 6);
      this.reviewBlock2 = sortedReviews.splice(5, 6);
      this.reviewBlock3 = sortedReviews.splice(11, 6);
    });
  }
}
