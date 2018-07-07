import { Component, Input } from '@angular/core';
import { Ingridient } from '../../shopping-list/shopping-model';
import { ShoppingService } from '../../shopping-list/shopping.service';

@Component({
  selector: 'app-recept-detail',
  templateUrl: './recept-detail.component.html',
  styleUrls: ['./recept-detail.component.css']
})
export class ReceptDetailComponent {

  @Input() recept;

  constructor(private shoppingsServise:ShoppingService) { 

  }

  addToShoppingList() {
    const ingridient = this.recept.ingridients;
    console.log(ingridient)
  
    const item = new Ingridient(ingridient.name,+ingridient.amount);
    this.shoppingsServise.addFrom(ingridient);
    }

  }


