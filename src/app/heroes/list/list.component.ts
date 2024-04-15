import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroesName: string[] = ['spiderman', 'capitan america', 'Hulk', 'ironman', 'thor'];
  public deletedheroe?: string;

  removeHero(): void {
    this.deletedheroe = this.heroesName.pop();
  };

}
