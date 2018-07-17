import { Component, OnInit } from '@angular/core';

import { Ingridient } from '../../shopping-list/shopping-model';
import { ShoppingService } from '../../shopping-list/shopping.service';
import { Recept } from '../recepts.model';
import { ReceptsService } from '../recepts.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recept-detail',
  templateUrl: './recept-detail.component.html',
  styleUrls: ['./recept-detail.component.css']
})
export class ReceptDetailComponent implements OnInit {

  recept: Recept;
  id: number;
 

  constructor(
    private receptServise: ReceptsService,
    private shoppingsServise: ShoppingService,
    private route: ActivatedRoute
  ) {

  }

  addToShoppingList() {
    const ingridients = this.recept.ingridients;
    console.log(ingridients)
    this.shoppingsServise.add(...ingridients);
  }


  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.recept = this.receptServise.getReceptId(this.id)
    })
  }

}




