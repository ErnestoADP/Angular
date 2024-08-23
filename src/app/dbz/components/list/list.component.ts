import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Character } from '../../interfaces/character.interface';

@Component({
  selector:'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})

export class ListDbzComponent{

  @Input()
    public characterList: Character[]=[{
      name:'Trunks',
      power:10
    }]

    //onDelete = index value : number
    @Output()
    onDelete: EventEmitter<string> = new EventEmitter();

    onDeleteCharacter(id?: string): void{
      //TODO EMITER ID del personaje
      if (!id) return;
      this.onDelete.emit( id );
    }
}
