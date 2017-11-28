import { Component, OnInit } from '@angular/core';
import {BOOK_DATA} from "../book-data";
import {Book} from "../book/book.module";

@Component({
  selector: 'app-catalog',
  templateUrl: 'catalog.component.html',
  styles: []
})
export class CatalogComponent {
  books: Book[] = BOOK_DATA;
  selectedBook: Book;
  keywords: string;

  public selectBook(book) {
    this.selectedBook = book;
  }

  public search() {
    let needles: string[] = this.keywords.toLowerCase().split(' ');
    this.books = BOOK_DATA.filter(function(book) {
      if (needles.every(function(needle) {
          if ([book.title,
               book.description,
               book.authors,
               book.publisher
              ].some(haystack => {
                  return haystack.toLowerCase().includes(needle);
              })) return true;
      })) return true;
    });
  }
}
