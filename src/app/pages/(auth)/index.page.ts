import { RouteMeta } from '@analogjs/router';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// export const routeMeta: RouteMeta = {
//   redirectTo: '/auth/login',
//   pathMatch: 'full',
// };

@Component({
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h2>Products</h2>

    <router-outlet></router-outlet>
  `,
})
export default class AuthComponent {}