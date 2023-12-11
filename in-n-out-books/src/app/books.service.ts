/**
 * Title: books.service.ts
 * Author: John Davidson
 * Date: 5 December 2023
 * Description: Books service
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBook } from './book.interface';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  // An array of ISBNs.
  isbns: Array<string> = [
    '0345339681',
    '0261103571',
    '9780593099322',
    '9780261102361',
    '9780261102378',
    '9780590302715',
    '9780316769532',
    '9780743273565',
    '9780590405959'
  ];

  constructor(private http: HttpClient) {

  }

  // Returns the entire array of books.
  getBooks() {
    // Create a new instance of HttpParams to build URL parameters.
    let params = new HttpParams();

    // Append parameters to the HttpParams object.
    params = params.append('bibkeys', `ISBN: ${this.isbns.join(',')}`);
    params = params.append('format', 'json');
    params = params.append('jscmd', 'details');

    // Make an HTTP GET request to the Open Library API with the specified parameters.
    return this.http.get('https://openlibrary.org/api/books', {params: params});
  }
}
