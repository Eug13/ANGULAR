import { Component, OnInit } from '@angular/core';
import {Shopping} from './shopping-model'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent  {

  shoppings:Shopping[] = [
    new Shopping('Meat',2),
    new Shopping('Chease',3)

  ]

 constructor(){}

}
