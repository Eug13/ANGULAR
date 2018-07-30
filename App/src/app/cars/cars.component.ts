import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars = [];
  constructor() { }

  updateCar(car: { name: number, counter: number }) {
    this.cars.push(car);
    console.log(this.cars)
    localStorage.setItem('array', JSON.stringify(this.cars));
  }

clear(){
      localStorage.clear();
      window.location.reload();
}

  ngOnInit() {
    if(localStorage.getItem('array')){
      this.cars = JSON.parse(localStorage.getItem('array'));
    // console.log(localStorage.getItem('array'));
    // localStorage.clear()
    }
  }

}
