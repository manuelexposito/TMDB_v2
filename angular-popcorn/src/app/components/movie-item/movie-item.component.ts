import { AccountService } from './../../services/account.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/interfaces/movies-popular.interface';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { DialogListsComponent } from '../dialogs/dialog-lists/dialog-lists.component';

import { Router } from '@angular/router';
import { DialogLoginComponent } from '../dialogs/dialog-login/dialog-login.component';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movieInput!: Movie;

  //Array de los ids de las peliculas favoritas
  idsArray : number [] = [];
 //token !: string;

  constructor(private authService : AuthService,
    private accService : AccountService,
     public dialog: MatDialog,
      private router :Router) { }

  ///DIALOGO------------
  openDialogList(): void {
    const dialogRef = this.dialog.open(DialogListsComponent, {
      width: '650px',
      height: '300px',
      data: {name : this.movieInput.title,
              id : this.movieInput.id},
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

      this.accService.getFavoriteMovies().subscribe(
        r => {
              r.results.forEach( m => {
               this.idsArray.push(m.id)
          });}
      )


    }




  }

  getMovieImageUrl(movie: Movie) {
    return `${environment.imageBaseUrl}${movie.poster_path}`;
  }


  addToList(){
      if(this.authService.isLoggedIn())
      this.openDialogList();
      else
      this.openDialogLogin();
  }



  addFavorite(movieId : number){

    if(this.authService.isLoggedIn()){

      this.accService.addFavorite(movieId).subscribe()
      window.location.reload();
    } else{

      this.openDialogLogin();

    }

  }

  checkingFavMovie(idMovie : number) : boolean{


    return this.idsArray.includes(idMovie)?true:false

  }

}
