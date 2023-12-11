/**
 * Title: app.component.ts
 * Author: John Davidson
 * Date: 10 December 2023
 * Description: App component
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // Create an assignment variable to display our application title.
  assignment: string;

  // Initialize the assignment variable.
  constructor() {
    this.assignment = 'Welcome to In-N-Out-Books';
  }
}
