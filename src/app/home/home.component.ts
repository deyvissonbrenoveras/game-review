import { Component, OnInit } from '@angular/core';
import { GamesService } from './games.service';
import { Game } from '../shared/game.model';
@Component({
  selector: 'gr-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  games: Game[] = [];
  constructor(private gameService: GamesService) {}

  ngOnInit(): void {
    this.gameService.games().subscribe((games) => (this.games = games));
  }
}
