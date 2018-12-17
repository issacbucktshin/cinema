// components
import { MovieCardComponent } from './card/movie-card.component';
import { MoviesManagementComponent } from './management/movies-management.component';
import { MovieDetailsComponent } from './details/movie-details.component';

// services
import { MovieService } from './movie.service';

// Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSharedModule } from '../shared/shared.module';
import { LayoutModule } from '../layout/layout.module';
import { RouterModule } from '@angular/router';
import { SaveMovieComponent } from './save/save-movie.component';

@NgModule({
  imports: [
    CommonModule,
    AppSharedModule,
    LayoutModule,
    RouterModule
  ],
  exports:[
    MoviesManagementComponent
  ],
  declarations: [
    MovieCardComponent,
    MoviesManagementComponent,
    MovieDetailsComponent,
    SaveMovieComponent
  ],
  providers: [MovieService]
})
export class MovieModule { }
