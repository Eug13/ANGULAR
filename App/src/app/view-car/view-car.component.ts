import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-car',
  templateUrl: './view-car.component.html',
  styleUrls: ['./view-car.component.css']
})


export class ViewCarComponent implements OnInit {

  @Input('singleCar') singleCar: { name: number ,counter:number,times:number};

  constructor() { }

  private targetClass: string = 'current';

checked(event){
  event.target.setAttribute("class", "round new");
}

ngOnInit():void{
  if(this.singleCar.times === 5){
    this.targetClass = 'next';
    console.log('5')
  }else if(this.singleCar.times === 4){
    console.log('4')
  }else if(this.singleCar.times === 3){
    console.log('3')
  }else if(this.singleCar.times === 2){
    console.log('2')
  }else if(this.singleCar.times === 1){
    console.log('1')
  }else{
    console.log('Start')
  }
}


  checkCar(car) {
    if (car === 0) {
      return true;
    }
    else {
      return false;
    }
  }

}
