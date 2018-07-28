import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  // cars:[{name:string,trial:number}] = [{name:'Audi',trial:1000}];
cars=[];
  constructor() { }

  updateCar(car:{name:number,counter:number}){
   
     this.cars.push(car);
  console.log(this.cars)
  }
}
