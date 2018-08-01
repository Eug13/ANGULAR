import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-car',
  templateUrl: './view-car.component.html',
  styleUrls: ['./view-car.component.css']
})


export class ViewCarComponent implements OnInit{

  @Output('delCar') delCar = new EventEmitter<{ name: number, counter: number, times: number, rutine: number, six: number, rec: number }>();
  @Input('singleCar') singleCar: { name: number, counter: number, times: number, six: number };

  constructor() {
  }

  private targetClass: string = 'current';
  showStyle: false;
  done: false;
  public count: number = 0;
  nonCounter = 1;
  // dataArr = [];
  check=''
 

  checked(event) {
    event.target.setAttribute("class", "round new");
    // event.target.setAttribute("id", this.count);
    this.count++
    if (this.count === 6) {
      this.check='new'
      localStorage.setItem('checked', JSON.stringify(this.check));
    
    }
    console.log(this.singleCar.counter)
  }


  getStyle() {
    if (this.showStyle) {
      this.getDone();
      return "silver";
    } else {
      return "";
    }
  }

  getDone() {
    if (this.showStyle) {
      return "inline";
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

  remove() {
    this.delCar.emit({
      name: null,
      counter: null,
      times: null,
      rutine: null,
      six: null,
      rec: null
    });

    this.count = 0;
    
    console.log(this.nonCounter)
    this.nonCounter++;
    localStorage.setItem('nonCounter', JSON.stringify(this.nonCounter));
    window.location.reload();
  }

ngOnInit(){
  if(localStorage.getItem('checked')){
    this.check = JSON.parse(localStorage.getItem('checked'));

  // console.log(localStorage.getItem('array'));
  // localStorage.clear()
  }
  if(localStorage.getItem('nonCounter')){
    this.nonCounter = JSON.parse(localStorage.getItem('nonCounter'));
  }
}


}
