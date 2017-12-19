import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from "./book.module";
import {Router} from "@angular/router";

@Component({
  selector: 'book-details',
  templateUrl: 'book.component.html',
  styleUrls: ['book.component.scss']
})
export class BookComponent {

  constructor(private router: Router) {}

  @Input()
  book: Book;

  @Output()
  public back = new EventEmitter();

  public orderBook(): void {
    this.router.navigateByUrl('/customer-details');
  }
}
