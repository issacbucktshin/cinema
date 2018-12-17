import { Routes } from "@angular/router";
import { MoviesManagementComponent } from "./movie/management/movies-management.component";
import { MovieDetailsComponent } from './movie/details/movie-details.component';

export const AppRoutes: Routes = [
    {
        path: '', redirectTo: 'movie', pathMatch:'full'
    },
    {
        path: 'movie',
        component: MoviesManagementComponent,
    },
    {
        path: 'movies/details',
        component: MovieDetailsComponent
    }
]