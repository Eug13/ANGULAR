import { Component, Input, OnInit } from '@angular/core';

import { Ingridient } from '../../shopping-list/shopping-model';
import { ShoppingService } from '../../shopping-list/shopping.service';
// import { Recept } from '../recepts.model';
import { ReceptsService } from '../recepts.service';

@Component({
  selector: 'app-recept-detail',
  templateUrl: './recept-detail.component.html',
  styleUrls: ['./recept-detail.component.css']
})
export class ReceptDetailComponent{

  @Input() recept;

  constructor(
    private shoppingsServise:ShoppingService
  ) { 

  }

  addToShoppingList() {
    const ingridients = this.recept.ingridients;
    console.log(ingridients)
    this.shoppingsServise.add(...ingridients);
    }

  }


