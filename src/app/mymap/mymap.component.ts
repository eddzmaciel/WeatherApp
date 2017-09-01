import { Component, OnInit } from '@angular/core';
//agregamos la el objeto para que se obtengan las coordenadas con el mouse
import {MouseEvent}from '@agm/core';
@Component({
  selector: 'app-mymap',
  templateUrl: './mymap.component.html',
  styleUrls: ['./mymap.component.css']
})
export class MymapComponent implements OnInit {
	lat=55;
	lng=26;
	zoom=7;

  constructor() { }

  ngOnInit() {
  }
}
