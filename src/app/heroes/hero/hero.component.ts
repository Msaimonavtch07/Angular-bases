import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public title: string = 'Heroes marvel'

  public name: string = ' ironman ';
  public age: number = 44;

  get capitalizador(): string {

    return this.name.toUpperCase();

  };

  getHeroeDescription(): string {

    return `${this.name} 👻 ${this.age}`

  };

  changeHero(): void {
    this.name = 'spiderman'
  };

  changeAge(): void {
    this.age = 24
  };

  resetFrom(): void {
    this.name = ' ironman '
    this.age = 44
  };

};
