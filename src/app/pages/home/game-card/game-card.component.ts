import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'gr-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css'],
})
export class GameCardComponent implements OnInit {
  @Input() game: any;

  constructor() {}

  ngOnInit(): void {}
}
