import { ListSuccessSnackbarComponent } from './../../snackbar/list-success-snackbar/list-success-snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.service';
import { ListsService } from './../../../services/lists.service';
import { List } from './../../../models/interfaces/lists.interface';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MovieItemComponent } from '../../movie-item/movie-item.component';
import { FormControl, Validators } from '@angular/forms';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';

export interface DialogList {
  name: string;
  id: number;
}

@Component({
  selector: 'app-dialog-lists',
  templateUrl: './dialog-lists.component.html',
  styleUrls: ['./dialog-lists.component.css'],
})
export class DialogListsComponent implements OnInit {
  nombreNuevaLista!: string;
  descNuevaLista!: string;
  nombresListas!: string[];
  listas!: List[];
  selectedList!: List;

  constructor(
    public dialogRef: MatDialogRef<MovieItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogList,
    private listService: ListsService,
    private authService: AuthService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.listService.getLists().subscribe((r) => (this.listas = r.results));
    }
  }

  addMovieToList(selectedList: List) {
    //TODO AÑADIR MOVIE TO LIST
    if (this.listas.includes(selectedList)) {
      this.listService
        .addMovieToList(this.data.id, this.selectedList.id)
        .subscribe();
    }
  }

  addMovieToNewList(listName: string, listDesc : string) {

    this.listService.createNewList(listName, listDesc).subscribe((r) => {

      this.listService.addMovieToList(this.data.id, r.list_id).subscribe( r => {});
    });
  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  openSnackBar() {
    //TODO que aparezca SOLO cuando la película ha sido añadida
    this._snackBar.openFromComponent(ListSuccessSnackbarComponent, {
      duration: 2000,
    });
  }
}
