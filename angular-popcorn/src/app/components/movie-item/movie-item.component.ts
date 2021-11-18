import { AuthService } from 'src/app/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/interfaces/movies-popular.interface';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { DialogListsComponent } from '../dialogs/dialog-lists/dialog-lists.component';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movieInput!: Movie;

  token !: string;

  constructor(private authService : AuthService, public dialog: MatDialog) { }

  ///DIALOGO------------
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogListsComponent, {
      width: '650px',
      height: '300px',
      data: {name : this.movieInput.title},
    });

   
  }
  ///DIALOGO-------

  ngOnInit(): void {


  }

  getMovieImageUrl(movie: Movie) {
    return `${environment.imageBaseUrl}${movie.poster_path}`;
  }

  getRequestToken(){


    this.authService.getRequestToken().subscribe(
      r => {this.token = r.request_token                                        //?redirect_to=http://localhost:4200/approved
        window.location.href=`https://www.themoviedb.org/authenticate/${this.token}`;}
    )
    
  }



  isLoggedIn(){

    return this.authService.isLoggedIn()
  }


}
