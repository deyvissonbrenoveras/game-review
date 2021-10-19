import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
      id: Math.random() * (10000 - 100) + 100,
      gameId: '',
      reviewerName: '',
      title: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100),
      ]),
      description: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(200),
      ]),
      rating: this.formBuilder.control(0, [
        Validators.min(1),
        Validators.max(5),
      ]),
    });

    this.activatedRouted.params.subscribe((params) => {
      this.gamesService
        .gameById(params.id)
        .subscribe((game) => (this.game = game));
    });
  }
  onSubmit(): void {
    this.reviewForm.markAllAsTouched();
    if (this.reviewForm.valid) {
      this.reviewsService
        .addReview(this.reviewForm.value)
        .subscribe((res) => console.log(res));
    }
  }
  rate(rating: number) {
    this.reviewForm.patchValue({ rating });
  }
}
