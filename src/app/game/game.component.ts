import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GamesService } from '../home/games.service';
import { Game } from '../shared/game.model';
import { ReviewsService } from '../home/reviews.service';
@Component({
  selector: 'gr-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  @Input() game: Game;

  reviewForm: FormGroup;

  constructor(
    private activatedRouted: ActivatedRoute,
    private gamesService: GamesService,
    private reviewsService: ReviewsService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.reviewForm = this.formBuilder.group({
      id: 23,
      gameId: '',
      reviewerName: '',
      title: '',
      description: '',
      rating: 5,
    });

    this.activatedRouted.params.subscribe((params) => {
      this.gamesService
        .gameById(params.id)
        .subscribe((game) => (this.game = game));
    });
  }
  onSubmit(): void {
    this.reviewsService
      .addReview(this.reviewForm.value)
      .subscribe((res) => console.log(res));
  }
}
