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
import { HomeComponent } from './pages/home/home.component';
import { GameCardComponent } from './pages/home/game-card/game-card.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { GameComponent } from './pages/game/game.component';
import { GamesService } from './pages/home/games.service';
import { TitleComponent } from './shared/title/title.component';
import { ReviewCardComponent } from './pages/home/review-card/review-card.component';
import { ReviewsService } from './pages/home/reviews.service';
import { RatingComponent } from './shared/rating/rating.component';
import { LogoComponent } from './shared/logo/logo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingSelectorComponent } from './shared/rating-selector/rating-selector.component';
import { ReviewComponent } from './pages/game/review/review.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { LogonComponent } from './pages/logon/logon.component';
import { LogonLayoutComponent } from './layouts/logon-layout/logon-layout.component';

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
    RatingSelectorComponent,
    ReviewComponent,
    HomeLayoutComponent,
    LogonLayoutComponent,
    LogonComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule.forChild(ROUTES),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [GamesService, ReviewsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
