import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroesComponent } from './heroes.component';

@Component({
  selector: 'my-app',
    styleUrls: [ './app.component.css' ],
    template: `
<h1>My {{title}}</h1>
   <nav>
     <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
     <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
   </nav>
   <router-outlet></router-outlet>
`
})
export class AppComponent implements OnInit {
  title = 'Heroes!';
  ngOnInit(): void {
    
  }
}