import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookComponent } from './component/add-book/add-book.component';
import { BookDetailsComponent } from './component/book-details/book-details.component';
import { BooksListComponent } from './component/books-list/books-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    BookDetailsComponent,
    BooksListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
