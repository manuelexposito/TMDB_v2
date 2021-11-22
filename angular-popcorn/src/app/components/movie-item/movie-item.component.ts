import { AccountService } from './../../services/account.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/interfaces/movies-popular.interface';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { DialogListsComponent } from '../dialogs/dialog-lists/dialog-lists.component';

import { Router } from '@angular/router';
import { DialogLoginComponent } from '../dialogs/dialog-login/dialog-login.component';
import { MoviesPopularListComponent } from '../movies-popular-list/movies-popular-list.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movieInput!: Movie;

  //Array de los ids de las peliculas favoritas
  idsArray: number[] = [];
  isFav !: boolean;

  constructor(private authService: AuthService,
    private accService: AccountService,
    public dialog: MatDialog,
    private router: Router,
    private movieService : MoviesService) { }

  ///DIALOGO------------
  openDialogList(): void {
    const dialogRef = this.dialog.open(DialogListsComponent, {
      width: '650px',
      data: {
        name: this.movieInput.title,
        id: this.movieInput.id
      },
    });


  }

  openDialogLogin(): void {
    const dialogRef = this.dialog.open(DialogLoginComponent, {
      width: '650px',
      height: '200px'
    });
  }

  ///DIALOGO-------

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {

      this.movieService.getMovie(this.movieInput.id).subscribe(
        r => {
          this.movieService.getAccountStates(r.id).subscribe(
            resp => this.isFav = resp.favorite
            
          )
        }
      )
    }
  }

  getMovieImageUrl(movie: Movie) {
    return `${environment.imageBaseUrl}${movie.poster_path}`;
  }


  addToList() {
    if (this.authService.isLoggedIn())
      this.openDialogList();
    else
      this.openDialogLogin();
  }



  addFavorite(movieId: number) {

   
    
    if (this.authService.isLoggedIn()) {

      this.accService.addFavorite(movieId, !this.isFav).subscribe(resp => {
      
      this.isFav = !this.isFav;
     
      });

    } else {

      this.openDialogLogin();

    }

  }

}
