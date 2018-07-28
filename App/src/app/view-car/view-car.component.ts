import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-car',
  templateUrl: './view-car.component.html',
  styleUrls: ['./view-car.component.css']
})


export class ViewCarComponent {

  @Input('singleCar') singleCar: { name: number ,counter:number};

  constructor() { }

  checkCar(car) {
    if (car === 0) {
      return true;
    }
    else {
      return false;
    }
  }

}
