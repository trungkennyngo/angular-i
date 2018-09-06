import { Component, Input, OnInit } from '@angular/core';
 
import { Hero } from './hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() hero: Hero;
  @Input('master') masterName: string;
}

