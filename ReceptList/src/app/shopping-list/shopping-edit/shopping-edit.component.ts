import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingridient } from '../shopping-model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('ingridient') ingridientRef: ElementRef;
  @ViewChild('amount') amountRef: ElementRef;


  constructor(private shoppingsServise:ShoppingService) { 

  }

  add() {
    const ingridient = this.ingridientRef.nativeElement.value;
    const amount = this.amountRef.nativeElement.value;
    const item = new Ingridient(ingridient,+amount);
    this.shoppingsServise.add(item);
  }


}


