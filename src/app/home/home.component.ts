import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gr-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  games: any[] = [
    {
      name: 'God of War',
      reviews: 10,
      rating: 4,
    },
    {
      name: 'The Last of Us',
      reviews: 4,
      rating: 5,
    },
    {
      name: 'Horizon Zero Dawn',
      reviews: 12,
      rating: 4,
    },
    {
      name: 'Horizon Zero Dawn',
      reviews: 12,
      rating: 4,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
