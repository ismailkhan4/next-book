import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectBooks } from '../store/books.selector';

@Component({
  selector: 'app-define',
  templateUrl: './define.component.html',
  styleUrls: ['./define.component.css']
})
export class DefineComponent {

  constructor(private store: Store) {
  }

  books$ = this.store.pipe(select(selectBooks));

}
