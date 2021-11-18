import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MovieItemComponent } from '../../movie-item/movie-item.component';


export interface DialogList {
  name: string;
}



@Component({
  selector: 'app-dialog-lists',
  templateUrl: './dialog-lists.component.html',
  styleUrls: ['./dialog-lists.component.css']
})
export class DialogListsComponent implements OnInit {

  nombreNuevaLista !: string;

  constructor(public dialogRef: MatDialogRef<MovieItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogList) { }

  ngOnInit(): void {
  }

  createNewList(name : string){

    alert(name)
  }

}
