import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './books/about/about.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./books/books.module').then((b) => b.BooksModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
