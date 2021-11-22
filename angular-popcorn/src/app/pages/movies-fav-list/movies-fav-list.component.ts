import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/interfaces/movies-popular.interface';
import { AccountService } from 'src/app/services/account.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-fav-list',
  templateUrl: './movies-fav-list.component.html',
  styleUrls: ['./movies-fav-list.component.css']
})
export class MoviesFavListComponent implements OnInit {

  favMovies !: Movie[];
  constructor(private moviesService : MoviesService, private accService : AccountService) { }

  ngOnInit(): void {

    this.getFavoriteMovies()

  }

  getFavoriteMovies(){

    this.accService.getFavoriteMovies().subscribe(

      r =>  {this.favMovies = r.results}

    )

  }

}
