import { Component, OnInit,Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-car',
  templateUrl: './input-car.component.html',
  styleUrls: ['./input-car.component.css']
})

export class InputCarComponent {
carName ='BMW';
carTrial = 1000;

@Output('newCar') newCar = new EventEmitter<{name:string,trial:number}>();

addCar(){
this.newCar.emit({
  name:this.carName,
  trial:this.carTrial
});
this.carName = '';
this.carTrial = null;
}



  constructor() { }


}
