import { Component,Input } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent {



  constructor(private shoppingsServise:ShoppingService,
    private route: ActivatedRoute
  ) { 

  }

onShopping(){
 this.shoppingsServise.shoppingSelect.emit(this.ingridient);
 console.log(this.ingridient)
}

onEdit(){
  this.shoppingsServise.shoppingSelect.emit(this.ingridient);
  this.shoppingsServise.edit(this.ingridient);
}

onDelete(){
  this.shoppingsServise.shoppingSelect.emit(this.ingridient);
  this.shoppingsServise.delete(this.ingridient);
}

@Input() ingridient;

}


