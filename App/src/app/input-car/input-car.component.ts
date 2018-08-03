import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import {TrainingService} from './../cars/training.servise'

@Component({
  selector: 'app-input-car',
  templateUrl: './input-car.component.html',
  styleUrls: ['./input-car.component.css']
})

export class InputCarComponent implements OnInit{
  carName = null;
  inputCalc = false;



  @Output('newCar') newCar = new EventEmitter<{ name: number,counter:number,times:number,rutine:number,six:number,rec:number,final:number ,first:number}>();

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
    let final = input*105/100;
    let first = input*80/100 ;

    while (count < 5) {
      rutine++
      this.createWeeks(count,weight,times,rutine,six,rec,final,first)
      count++
    }


    while(count<10){
      goal = input*step/100;
      times--
      rutine--
      this.createWeeks(count,goal,times,rutine,six,rec,final,first)
      count++
      step+=5;
    }
    this.carName = null;
    this.inputCalc = true;
    localStorage.setItem('inputCalc', JSON.stringify(this.inputCalc));
  }

  createWeeks(count,goal,times,rutine,six,rec,final,first) {


    this.newCar.emit({
      name: goal,
      counter:count,
      times:times,
      rutine:rutine,
      six:six,
      rec:rec,
      final:final,
      first:first
    });
    // this.carName = null;
  }


  allHide() {
    if (this.inputCalc) {
      return "none";
    } else {
      return "";
    }
  }

ngOnInit(){
  if (localStorage.getItem('inputCalc')) {
    this.inputCalc = JSON.parse(localStorage.getItem('inputCalc'));
  }
}

}
