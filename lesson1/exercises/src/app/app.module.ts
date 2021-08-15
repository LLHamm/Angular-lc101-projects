import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ChoresListComponent } from './chores-list/chores-list.component';
import { FavPhotosComponent } from './fav-photos/fav-photos.component';
import { FavLinksComponent } from './fav-links/fav-links.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    ChoresListComponent,
    FavPhotosComponent,
    FavLinksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
