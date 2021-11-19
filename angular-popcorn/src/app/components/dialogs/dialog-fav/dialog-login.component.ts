import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { MovieItemComponent } from '../../movie-item/movie-item.component';

export interface DialogLogin{
  name : string
}

@Component({
  selector: 'app-dialog-login',
  templateUrl: './dialog-login.component.html',
  styleUrls: ['./dialog-login.component.css']
})
export class DialogLoginComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MovieItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogLogin, private authService : AuthService) { }

  ngOnInit(): void {
  }

  doLogin(){

    this.authService.getRequestToken().subscribe(
      r =>                                     
        window.location.href=`https://www.themoviedb.org/authenticate/${r.request_token}?redirect_to=http://localhost:4200/approved`
       // this.router.navigateByUrl(`https://www.themoviedb.org/authenticate/${r.request_token}`
    )
  }

}
