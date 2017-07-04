import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroesComponent } from './heroes';

@Component({
  selector: 'my-app',
    template: `
<h2>My {{title}}</h2>
   <nav>
     <a routerLink="/dashboard">Dashboard</a>
     <a routerLink="/heroes">Heroes</a>
   </nav>
   <router-outlet></router-outlet>
`
})
export class AppComponent implements OnInit {
  title = 'Heroes!';
}