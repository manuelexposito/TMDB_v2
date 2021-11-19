import { AuthService } from 'src/app/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/interfaces/movies-popular.interface';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { DialogListsComponent } from '../dialogs/dialog-lists/dialog-lists.component';

import { Router } from '@angular/router';
import { DialogLoginComponent } from '../dialogs/dialog-fav/dialog-login.component';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movieInput!: Movie;

 //token !: string;

  constructor(private authService : AuthService, public dialog: MatDialog, private router :Router) { }

  ///DIALOGO------------
  openDialogList(): void {
    const dialogRef = this.dialog.open(DialogListsComponent, {
      width: '650px',
      height: '300px',
      data: {name : this.movieInput.title},
    });

   
  }

  openDialogFav(): void {
    const dialogRef = this.dialog.open(DialogLoginComponent, {
      width: '650px',
      height: '200px'
    });

   
  }

  ///DIALOGO-------

  ngOnInit(): void {


  }

  getMovieImageUrl(movie: Movie) {
    return `${environment.imageBaseUrl}${movie.poster_path}`;
  }



  addFavorite(){

    if(this.authService.isLoggedIn()){
      //TODO Guardar el favorito de la película actual.
      alert(this.authService.getSessionId());

    } else{

      this.openDialogFav();

    }

  }

}
