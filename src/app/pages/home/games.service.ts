import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Game } from '../../shared/game.model';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class GamesService {
  constructor(private http: HttpClient) {}

  games(): Observable<Game[]> {
    return this.http
      .get<Game[]>(`${environment.services.serverURL}/games`)
      .pipe(map((games: Game[]) => games.map((game) => game)));
  }

  gameById(id: string): Observable<Game> {
    return this.http
      .get<Game>(`${environment.services.serverURL}/games/${id}`)
      .pipe(map((game: Game) => game));
  }
}
