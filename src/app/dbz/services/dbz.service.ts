import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'


import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})

export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'krillin',
    power: 112,
  }, {
    id: uuid(),
    name: 'Goku',
    power: 1123,
  }, {
    id: uuid(),
    name: 'vegueta',
    power: 1342,
  }];

  addCharacter(Character: Character):void {

    const newCharacter: Character = { id: uuid(), ...Character };

    this.characters.push(newCharacter);

  };

  /* onDeletedCharacter( index: number) {
    this.characters.splice(index, 1);
  }; */

  deletedCharacterById( id: string) {
    this.characters = this.characters.filter( Character => Character.id !== id );
  };

  constructor() { }

};
