import { Component } from '@angular/core';
import { Hero, HEROES } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Authors Style Guide Sample';
  heroes = HEROES;
  selectedHero!: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/