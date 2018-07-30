import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-view-car',
  templateUrl: './view-car.component.html',
  styleUrls: ['./view-car.component.css']
})


export class ViewCarComponent {

  @Input('singleCar') singleCar: { name: number ,counter:number,times:number,six:number};

  constructor() { 
  }

  private targetClass: string = 'current';
  showStyle: false;
  count: 0

checked(event){
  event.target.setAttribute("class", "round new");

}




getStyle() {
  if(this.showStyle) {
    return "none";
  } else {
    return "";
  }
}

}
