import {Shopping} from './shopping-model'
import { EventEmitter } from '@angular/core';


export class ShoppingService {

    shoppingSelect = new EventEmitter<Shopping>();

   
  private shoppings:Shopping[] = [
    new Shopping('Meat',2),
    new Shopping('Chease',3)

  ]

    getShopping(): Shopping[] {
        return this.shoppings.slice();

    }
    
}

