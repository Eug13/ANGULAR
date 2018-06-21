import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-car',
  templateUrl: './view-car.component.html',
  styleUrls: ['./view-car.component.css']
})


export class ViewCarComponent {

  @Input('singleCar') singleCar:{name:string,trial:number};

  constructor() { }


}
