import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Ingridient } from '../../shopping-list/shopping-model';
import { ShoppingService } from '../../shopping-list/shopping.service';
import { Recept } from '../recepts.model';
import { ReceptsService } from '../recepts.service';

@Component({
  selector: 'app-recept-detail',
  templateUrl: './recept-detail.component.html',
  styleUrls: ['./recept-detail.component.css']
})
export class ReceptDetailComponent implements OnInit {

  @Input() recept;

  recepts: Observable<Recept[]>;

  private selectedId: number;


  constructor(
    private shoppingsServise:ShoppingService,
    private route: ActivatedRoute,
    private service:ReceptsService
  ) { 

  }

  addToShoppingList() {
    const ingridients = this.recept.ingridients;
    console.log(ingridients)
    this.shoppingsServise.add(...ingridients);
    }

    ngOnInit() {
      this.recept = this.route.paramMap.pipe(
        switchMap((params: ParamMap) => {
          // (+) before `params.get()` turns the string into a number
          this.selectedId = +params.get('id');
          return this.service.getRecepts();
        })
       ) }

  }


