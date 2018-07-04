import { Component, OnInit } from '@angular/core';
import {Shopping} from './shopping-model'
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  shoppings:Shopping[];

  constructor(private shoppingsServise:ShoppingService) { 

  }


 ngOnInit(): void {
  this.shoppings = this.shoppingsServise.getShopping();
  
}



}
