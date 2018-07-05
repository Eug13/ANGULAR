import { Component, OnInit } from '@angular/core';
import { Ingridient } from './shopping-model'
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingridients: Ingridient[];

  constructor(private shoppingsServise: ShoppingService) {

  }


  ngOnInit(): void {
    this.ingridients = this.shoppingsServise.getIngridients();
    this.shoppingsServise.ingridientChanged.subscribe((ingridients: Ingridient[]) => { this.ingridients = ingridients });

  }



}
