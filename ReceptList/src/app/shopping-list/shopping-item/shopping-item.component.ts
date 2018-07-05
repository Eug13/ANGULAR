import { Component,Input } from '@angular/core';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent {



  constructor(private shoppingsServise:ShoppingService) { 

  }

onShopping(){
 this.shoppingsServise.shoppingSelect.emit(this.ingridient);
 console.log(this.ingridient)
}

@Input() ingridient;

}


