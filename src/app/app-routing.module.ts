import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './component/add-book/add-book.component';
import { BookDetailsComponent } from './component/book-details/book-details.component';
import { BooksListComponent } from './component/books-list/books-list.component';

const routes: Routes = [
  {
    path:'',redirectTo:'add-book',pathMatch:'full'
  },
  {
    path:'bool-list',component:BooksListComponent
  },
  {
    path:'add-book',component:AddBookComponent
  },
  {
    path:'edit-book/:id',component:BookDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
