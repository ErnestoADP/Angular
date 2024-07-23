import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hereos-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age:  number = 45;


  get capitalizeName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string{

    return `${ this.name } - ${ this.age }`;

  }

  changeHero():void{
    this.name = 'Ant-Man'
  }

  changeAge():void{
   this.age = 30;
  }

  resetForm():void{
    this.name = 'ironman';
    this.age = 45;
  }

}
