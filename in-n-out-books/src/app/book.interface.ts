/**
 * Title: book.interface.ts
 * Author: John Davidson
 * Date: 10 December 2023
 * Description: Book interface object
 */

// Creates a book interface with properties for isbn, title, authors, description, and numOfPages.
export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
