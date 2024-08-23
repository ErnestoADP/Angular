import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { MainPageComponent } from './pages/main-page.components';
import { ListDbzComponent } from './components/list/list.component';
import { AddComponentDbz} from './components/add/add.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListDbzComponent,
    AddComponentDbz


  ],
  imports: [
    CommonModule,
    FormsModule
],
  exports:[
    MainPageComponent
  ]
})
export class DbzModule { }
