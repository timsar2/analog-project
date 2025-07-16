import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink], // Import RouterLink to provide a link back home
  template: `
    <div class="not-found-container">
      <h1>404 - Page Not Found 🗺️</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <a routerLink="/">Go Back to Home</a>
    </div>
  `,
  styles: [`
    .not-found-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 3rem;
    }
    a {
      margin-top: 1.5rem;
      font-weight: bold;
      color: #007bff;
    }
  `]
})
export default class PageNotFoundComponent {}