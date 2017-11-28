import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from "./book.module";

@Component({
  selector: 'book-details',
  templateUrl: 'book.component.html',
  styleUrls: ['book.component.scss']
})
export class BookComponent {
  @Input()
  book: Book;

  @Output()
  public back = new EventEmitter();
}
