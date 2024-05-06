import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  //los getters son propiedades
  get capitalizedName():string{
    return this.name.toUpperCase();
  }
  //las funciones son los metodos
  getHeroDescription():string{
    return `${this.name} - ${this.age}`
  }

  changeHero():void{
    this.name = 'spiterman'
  }
  changeAge():void{
    this.age = 30;
  }

  resetHero():void{
    this.name = 'ironman';
    this.age = 45;
  }

}
