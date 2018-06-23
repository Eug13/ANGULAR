import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-moto-view',
  templateUrl: './moto-view.component.html',
  styleUrls: ['./moto-view.component.css']
})
export class MotoViewComponent {

  @Input('singleMoto') singleMoto: { name: string, motor: number };

  constructor() { }

  checkMoto(moto) {
    if (moto === 'audi') {
      return true;
    }
    else {
      return false;
    }
  }

}




