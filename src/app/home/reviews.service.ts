import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}
