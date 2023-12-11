/**
 * Title: app.routing.module.ts
 * Author: John Davidson
 * Date: 10 December 2023
 * Description: Routing file
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import components for routing.
import { BookListComponent } from './book-list/book-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WishlistComponent } from './wishlist/wishlist.component';


// Establishes the routes in our application as well as the components for each route.
const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'book-list',
    component: BookListComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'wishlist',
    component: WishlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
