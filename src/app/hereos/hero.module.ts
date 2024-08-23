import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
//import { addComponentDbz } from "../dbz/components/add/add.component";



@NgModule({
  declarations:[
    HeroComponent,
    ListComponent,
  //  addComponentDbz
  ],
  exports:[
    HeroComponent,
    ListComponent,
   // addComponentDbz
  ],
  imports:[
    CommonModule
  ]
})

export class heroModule {

}
