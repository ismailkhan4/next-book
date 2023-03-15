import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { bookReducer } from './store/books.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffect } from './store/books.effect';
import { QuillModule } from 'ngx-quill'

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { BooksRoutingModule } from './books-routing.module';
import { EditorComponent } from './editor/editor.component';
import { DefineComponent } from './define/define.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    EditorComponent,
    DefineComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    QuillModule,
    MatButtonModule,
    MatIconModule,
    StoreModule.forFeature('mybooks', bookReducer),
    EffectsModule.forFeature([BooksEffect])
  ]
})
export class BooksModule { }
