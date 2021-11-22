import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesPopularListComponent } from './components/movies-popular-list/movies-popular-list.component';
import { MoviesFavListComponent } from './pages/movies-fav-list/movies-fav-list.component';
import { SessionComponent } from './shared/session/session.component';

const routes: Routes = [
  {path: 'movies', component: MoviesPopularListComponent},
  {path: 'approved', component: SessionComponent},
  {path: 'fav-movies-list', component:MoviesFavListComponent},
  {path: '**', pathMatch: 'full', redirectTo:'/movies'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
