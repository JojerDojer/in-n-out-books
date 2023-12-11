/**
 * Title: book-list.component.ts
 * Author: John Davidson
 * Date: 10 December 2023
 * Description: Book-list component
 */

// Import necessary modules and services.
import { Component, OnInit } from '@angular/core';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';
import { BooksService } from '../books.service';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  //
  books: Array<IBook> = [];
  // Variable to store details of a specific book.
  book: IBook;

  // Constructor to inject the BooksService and MatDialog.
  constructor(private booksService: BooksService, private dialog: MatDialog) {
    // Call the getBooks method of the BooksService, which returns an Observable.
    this.booksService.getBooks().subscribe(res => {
      // Log the response from the API to the console.
      console.log(res);
      // Loop through each key in the response object.
      for (let key in res) {
        // Check if the key is a direct property of the object.
        if (res.hasOwnProperty(key)) {
          // If so, initialize an empty array to store authors.
          let authors = [];
          // Check if the 'authors' property exists in the 'details' object.
          if (res[key].details.authors) {
            // If authors exists, map through them to get an array of author names.
            authors = res[key].details.authors.map(function(author) {
              return author.name;
            })
          }

          // Push a new book object to the 'books' array.
          this.books.push({
            // Use ISBN-13 if available, otherwise use ISBN-10.
            isbn: res[key].details.isbn_13 ? res[key].details.isbn_13 : res[key].details.isbn_10,
            title: res[key].details.title,
            // Use the subtitle if available, otherwise respond with 'N/A'.
            description: res[key].details.subtitle ? res[key].details.subtitle : 'N/A',
            numOfPages: res[key].details.number_of_pages,
            authors: authors
          })
        }
      }
    })
  }

  ngOnInit(): void {
  }

  // Method to display details of a specific book based on isbn.
  showBookDetails(isbn: string) {
    // Find the book with the specified ISBN from the books array.
    this.book = this.books.find(book => book.isbn === isbn);

    // Open a dialog to display book details.
    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: {
        book: this.book
      },
      disableClose: true, // Prevent closing the dialog by clicking outside or pressing esc key.
      width: '800px' // Set the width of the dialog.
    })

    // Subscribe to the dialog's afterClosed event.
    dialogRef.afterClosed().subscribe(result => {
      // Check if the result is 'confirm'.
      if (result === 'confirm') {
        // Reset the book variable when the dialog is confirmed.
        this.book === null;
      }
    });

    // Log the book details to the console.
    console.log(this.book);
  }
}
