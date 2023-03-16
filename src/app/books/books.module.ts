import { QuillModule } from 'ngx-quill'

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

import { EditorComponent } from './editor/editor.component';
import { DefineComponent } from './define/define.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { bookReducer } from './store/books.reducer';
import { BooksEffect } from './store/books.effect';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditorComponent,
    DefineComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    QuillModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    FormsModule,
    StoreModule.forFeature('mybooks', bookReducer),
    EffectsModule.forFeature([BooksEffect])
  ]
})
export class BooksModule { }
