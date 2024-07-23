import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hereos-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {

  public hereosNombre:string[]=['Batman','Superman', 'Flash', 'Green Lanter', 'Wonder Woman']
  public deleteHero?: string;

 removeLastHero():void{
    this.deleteHero = this.hereosNombre.pop();
  }



}
