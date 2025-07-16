import { Component, inject, } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { AboutService } from './about';
import { RouteMeta } from '@analogjs/router';

export const routeMeta: RouteMeta = {
  title: 'About Analog',
  meta: [
    {
      httpEquiv: 'refresh',
      content: '10',
    },
  ],
  canActivate: [() => true],
  providers: [AboutService],
};

@Component({
  standalone: true,
  imports:[JsonPipe],
  template: `
    <h2>Hello Analog, {{greeting() | json}}</h2>
    This page will be refresh every 10 sec
    Analog is a meta-framework on top of Angular.
  `,
})
export default class AboutPageComponent {
  private readonly service = inject(AboutService);
  greeting = this.service.greeting;
  constructor() {
    this.service.getData();
  }
}