import { Component, OnInit } from '@angular/core';
//agregamos la el objeto para que se obtengan las coordenadas con el mouse
import {MouseEvent}from '@agm/core';

@Component({
  selector: 'app-mymap2',
  templateUrl: './mymap2.component.html',
  styleUrls: ['./mymap2.component.css']
})
export class Mymap2Component implements OnInit {
lat=55;
	lng=26;
	zoom=7;

  constructor() { }

  ngOnInit() {
  }
    mapClicked($event:MouseEvent){
  	this.lat=$event.coords.lat;
  	this.lng=$event.coords.lng;
  	
 	 }


}
