/**
 * Title: wishlist.component.ts
 * Author: John Davidson
 * Date: 10 December 2023
 * Description: Wishlist component
 */

import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  // Declare an array property to hold wishlist items.
  items: Array<IWishlistItem> = [];
  constructor() { }

  ngOnInit(): void {
  }

  // Method to handle updating the list of wishlist items.
  updateItemsHandler(item: IWishlistItem) {
    // Add the new item to the array of wishlist items.
    this.items.push(item);
  }

}
