import { Component } from '@angular/core';

import { AnalogWelcome } from './analog-welcome';
import { RouterOutlet } from '@angular/router';
import { RouteMeta } from '@analogjs/router';

// export const routeMeta: RouteMeta = {
//   redirectTo: '/home',
//   pathMatch: 'full',
// };

@Component({
  selector: 'app-home',
  imports: [AnalogWelcome, RouterOutlet],
  template: `
     <app-analog-welcome/>

     <router-outlet></router-outlet>
  `,
})
export default class HomeComponent {
}
