import { Component } from '@angular/core';
import { appRoutes } from '../../routes';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  public routes: { route: string; name: string; }[];

  constructor() {
    this.routes = Object.entries(appRoutes).map(([name, route]) => ({
      route,
      name,
    }))
  }
}
