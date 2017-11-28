import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import {FormsModule} from "@angular/forms";
import {BookComponent} from "./book/book.component";


@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    BookComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
