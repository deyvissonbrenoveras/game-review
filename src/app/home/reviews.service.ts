import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParamsOptions,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from '../shared/review.model';
import { map } from 'rxjs/operators';

@Injectable()
export class ReviewsService {
  constructor(private http: HttpClient) {}

  reviews(): Observable<Review[]> {
    return this.http
      .get<Review[]>('http://localhost:3000/reviews')
      .pipe(map((reviews: Review[]) => reviews.map((review) => review)));
  }

  addReview(review: Review): Observable<object> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http
      .post(
        'http://localhost:3000/reviews',
        JSON.stringify(review),
        httpOptions
      )
      .pipe(map((response) => response));
    // .pipe(map((review) => review.id));
  }
  getReviewByGameId(id: number) {
    return this.http
      .get<Review[]>(`http://localhost:3000/reviews?gameId=${id}`)
      .pipe(map((reviews: Review[]) => reviews.map((review) => review)));
  }
}
