import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CounterModul } from './counter/counter.module';
import { heroModule } from './hereos/hero.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//importando



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModul,
    heroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
