import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import {TrainingService} from './../cars/training.servise'

@Component({
  selector: 'app-input-car',
  templateUrl: './input-car.component.html',
  styleUrls: ['./input-car.component.css']
})

export class InputCarComponent {
  carName = null;



  @Output('newCar') newCar = new EventEmitter<{ name: number,counter:number,times:number,rutine:number,six:number,rec:number }>();

  addCar() {
    let count = 1;
    let step = 85;
    let input = Number(this.carName)
    let weight = input*80/100 ;
    let goal = null;

    let times = Number(6);
    let rec = Number(2);
    let rutine = Number(2);
    let six = Number(6);
    // let goal = input*(80+5)/100;

    while (count < 5) {
      rutine++
      this.createWeeks(count,weight,times,rutine,six,rec)
      count++
    }


    while(count<10){
      goal = input*step/100;
      times--
      rutine--
      this.createWeeks(count,goal,times,rutine,six,rec)
      count++
      step+=5;
    }
    this.carName = null;

  }

  createWeeks(count,goal,times,rutine,six,rec) {


    this.newCar.emit({
      name: goal,
      counter:count,
      times:times,
      rutine:rutine,
      six:six,
      rec:rec
    });
    // this.carName = null;
  }






}
