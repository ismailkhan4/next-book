import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Books } from './store/books';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) { }
  get() {
    const selection = this.getSelection();
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${selection}`
    return this.http.get<Books[]>(url)
  }

  getSelection() {
    const selection = window.getSelection();
    if (selection && selection.toString().trim()) {
      return selection.toString().trim();
    }
    return '';
  }
}