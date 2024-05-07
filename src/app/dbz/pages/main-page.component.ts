import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  public characters: Character[] = [
    {
      name: 'krilin',
      power: 1000
    },
    {
      name: 'goku',
      power: 10000
    },
    {
      name: 'vegeta',
      power: 7500
    },

  ];
}
