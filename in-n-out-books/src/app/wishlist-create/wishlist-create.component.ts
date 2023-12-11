/**
 * Title: wishlist-create.component.ts
 * Author: John Davidson
 * Date: 10 December 2023
 * Description: Wishlist-create component
 */

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface'


@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.scss']
})
export class WishlistCreateComponent implements OnInit {

  // Declare an Output property for emitting events to the parent component.
  @Output() addItemEmitter = new EventEmitter<IWishlistItem>();

  // Declare a property to represent a wishlist item.
  item: IWishlistItem;

  constructor() {
    // Initialize the item property as an empty object.
    this.item = {} as IWishlistItem;
  }


  ngOnInit(): void {
  }

  // Method for adding a new item to the wishlist.
  addItem() {
    // Emit an event to the parent component with the current item data.
    this.addItemEmitter.emit({
      title: this.item.title,
      authors: this.item.authors
    })

    // Reset the item to an empty object after emitting the event.
    this.item = {} as IWishlistItem;
  }

}
