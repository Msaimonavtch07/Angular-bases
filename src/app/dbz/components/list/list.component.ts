import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 13,
  }];

  @Output()
  public onDeleted: EventEmitter<string> = new EventEmitter();

  onDeletedCharacter( id?: string ): void {
    // TODO: emitir el ID del personaje...
    if(!id) return;
    console.log({id})

    this.onDeleted.emit( id );
  };

}