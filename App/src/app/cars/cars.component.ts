import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

cars=[];
  constructor() { }

  updateCar(car:{name:number,counter:number}){
   
     this.cars.push(car);
  console.log(this.cars)
  }
}
