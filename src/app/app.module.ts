import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ROUTES } from './app.routes';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import { GameCardComponent } from './home/game-card/game-card.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GameComponent } from './game/game.component';
import { GamesService } from './home/games.service';
import { TitleComponent } from './shared/title/title.component';
import { ReviewCardComponent } from './home/review-card/review-card.component';
import { ReviewsService } from './home/reviews.service';
import { RatingComponent } from './shared/rating/rating.component';
import { LogoComponent } from './shared/logo/logo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    GameCardComponent,
    AboutComponent,
    GameComponent,
    TitleComponent,
    ReviewCardComponent,
    RatingComponent,
    LogoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [GamesService, ReviewsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
