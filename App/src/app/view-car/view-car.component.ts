import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-car',
  templateUrl: './view-car.component.html',
  styleUrls: ['./view-car.component.css']
})


export class ViewCarComponent {

  @Output('delCar') delCar = new EventEmitter<{ name: number,counter:number,times:number,rutine:number,six:number,rec:number }>();
  @Input('singleCar') singleCar: { name: number, counter: number, times: number, six: number };

  constructor() {
  }

  private targetClass: string = 'current';
  showStyle: false;
  done: false;
  count: 0

  checked(event) {
    event.target.setAttribute("class", "round new");

  }




  getStyle() {
    if (this.showStyle) {
      this.getDone();
      return "silver" ;
    } else {
      return "";
    }
  }

  getDone(){
    if (this.showStyle) {
      return "inline" ;
    } else {
      return "";
    }
  }

  allDone() {
    if (this.done) {
      return "none";
    } else {
      return "";
    }
  }

  remove(){
    this.delCar.emit({
      name: null,
      counter:null,
      times:null,
      rutine:null,
      six:null,
      rec:null
    });
  }

}
