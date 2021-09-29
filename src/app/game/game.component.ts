import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../home/games.service';
import { Game } from '../shared/game.model';
@Component({
  selector: 'gr-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  @Input() game: Game;

  constructor(
    private activatedRouted: ActivatedRoute,
    private gamesService: GamesService
  ) {}

  ngOnInit(): void {
    this.activatedRouted.params.subscribe((params) => {
      this.gamesService
        .gameById(params.id)
        .subscribe((game) => (this.game = game));
    });
  }
}
