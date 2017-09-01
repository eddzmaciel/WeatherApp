import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//agregando el modulo pra el uso de mapas
import {AgmCoreModule}from '@agm/core';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MymapComponent } from './mymap/mymap.component';
import { Mymap2Component } from './mymap2/mymap2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MymapComponent,
    Mymap2Component
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyBq5eMU9nkbYGR6nWEkkdH92zuSZCvROL8'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
