import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Game } from '../shared/game.model';
import { map } from 'rxjs/operators';

@Injectable()
export class GamesService {
  constructor(private http: HttpClient) {}

  games(): Observable<Game[]> {
    return this.http
      .get<Game[]>('http://localhost:3000/games')
      .pipe(map((games: Game[]) => games.map((game) => game)));
  }
}
