import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Genre } from 'src/app/models/interfaces/genre.interface';
import { Movie, MoviesPopularResponse } from 'src/app/models/interfaces/movies-popular.interface';
import { AuthService } from 'src/app/services/auth.service';
import { GenreService } from 'src/app/services/genre.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-popular-list',
  templateUrl: './movies-popular-list.component.html',
  styleUrls: ['./movies-popular-list.component.css']
})
export class MoviesPopularListComponent implements OnInit {
  //genres = new FormControl();
  popularMovies: Movie[] = [];
  moviesListDefault: Movie[] = [];
  selectedGenresId: number[] = [];
  genreList: Genre[] = [];
  genresId: number[] = [];
  token !: string;



  constructor(private moviesService: MoviesService, private authService: AuthService, private genreService: GenreService) { }

  ngOnInit(): void {

    this.genreService.getGenreList().subscribe(
      r => {
        this.genreList = r.genres
        this.genreList.forEach(g => this.genresId.push(g.id))
      }
    )
    this.getMoviesList()
    this.filterMovieByGenre(this.selectedGenresId);
  }


  filterMovieByGenre(selectedGenresId: number[]) {
   
  
    this.popularMovies = this.moviesListDefault;
    
    if(this.selectedGenresId.length > 0){
    
    let filteredList : Movie [] =  this.popularMovies.filter(  movie => movie.genre_ids.some(m => selectedGenresId.includes(m)));
    this.popularMovies = filteredList
    
    } else{
      this.popularMovies = this.moviesListDefault;
    } 

  }


  getMoviesList() {

    this.moviesService.getPopularMovies().subscribe(popularMoviesResponse => {
      this.moviesListDefault = popularMoviesResponse.results;
      this.popularMovies = this.moviesListDefault;
    });

  }


}

