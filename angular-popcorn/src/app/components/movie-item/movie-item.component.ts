import { AuthService } from 'src/app/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/interfaces/movies-popular.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movieInput!: Movie;

  token !: string;
  constructor(private authService : AuthService) { }

  ngOnInit(): void {


  }

  getMovieImageUrl(movie: Movie) {
    return `${environment.imageBaseUrl}${movie.poster_path}`;
  }

  getRequestToken(){

    this.authService.getRequestToken().subscribe(
      r => this.token = r.request_token
    )

    return this.token
  }

  redirectToLogin(token : string){

    window.location.href=`https://www.themoviedb.org/authenticate/${token}`;

  }


  redirectWithToken(){

    let newToken = this.getRequestToken()
    this.redirectToLogin(newToken)

  }


  isLoggedIn(){

    return this.authService.isLoggedIn()
  }


}
