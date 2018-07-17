import { Ingridient } from './shopping-model'
import { EventEmitter } from '@angular/core';


export class ShoppingService {

  shoppingSelect = new EventEmitter<Ingridient[]>();

  ingridientChanged = new EventEmitter<Ingridient[]>();


  private ingridients: Ingridient[] = [
    new Ingridient('Meat', 2),
    new Ingridient('Chease', 3)

  ]

  add(...item) {
    this.ingridients.push(...item);
    this.ingridientChanged.emit(this.ingridients.slice())
    console.log(this.ingridients)
  }

  edit(item){
    
  }


  delete(item) {
    let index = this.ingridients.indexOf(item);
    if (index > -1) {
      this.ingridients.splice(index, 1)
      this.ingridientChanged.emit(this.ingridients);
   
    }
  }

  getIngridients(): Ingridient[] {
   
    return this.ingridients.slice();//getter for private array 

  }

}

