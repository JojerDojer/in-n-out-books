/**
 * Title: book-details-dialog.component
 * Author: John Davidson
 * Date: 10 December 2023
 * Description: Book details dialog (dialog box for displaying the details of a book)
 */

// Necessary import statements.
import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.scss']
})
export class BookDetailsDialogComponent implements OnInit {

  // Property to hold the book details.
  book: IBook;

  //Constructor to initialize the dialog component.
  constructor(private dialogRef: MatDialogRef<BookDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    //Initialize the book details from the injected data.
    this.book = data.book;
  }

  ngOnInit(): void {
  }

}
