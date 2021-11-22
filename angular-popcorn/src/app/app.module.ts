import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { MaterialImportsModule } from './modules/material-imports.module';
import { MoviesPopularListComponent } from './components/movies-popular-list/movies-popular-list.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { DialogListsComponent } from './components/dialogs/dialog-lists/dialog-lists.component';
import { FormsModule } from '@angular/forms';

import { SessionComponent } from './shared/session/session.component';
import { DialogLoginComponent } from './components/dialogs/dialog-login/dialog-login.component';
import { ListSuccessSnackbarComponent } from './components/snackbar/list-success-snackbar/list-success-snackbar.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { MoviesFavListComponent } from './pages/movies-fav-list/movies-fav-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesPopularListComponent,
    MovieItemComponent,
    DialogListsComponent,
    DialogLoginComponent,
    SessionComponent,
    ListSuccessSnackbarComponent,
    ToolbarComponent,
    MoviesFavListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      showInnerStroke: false,
      showSubtitle:false,
      animationDuration: 300,

    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
