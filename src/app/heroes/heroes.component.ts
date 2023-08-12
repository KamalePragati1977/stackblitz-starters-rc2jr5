import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroDetailsComponent } from '../hero-details/hero-details.component';
import { HEROES } from '../mock-heroes';

@Component({
  standalone:true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[]= HEROES;
  constructor() { 
    console.log(this.heroes);
  }

  ngOnInit() {
  }

}