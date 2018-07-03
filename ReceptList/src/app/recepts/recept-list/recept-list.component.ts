import { Component, OnInit } from '@angular/core';
import { ReceptsService } from '../recepts.service';
import { Recept } from '../recepts.model';


@Component({
  selector: 'app-recept-list',
  templateUrl: './recept-list.component.html',
  styleUrls: ['./recept-list.component.css']
})
export class ReceptListComponent implements OnInit {

   recepts: Recept[];

  constructor(private receptsServise:ReceptsService) { 

  }

ngOnInit(): void {
  this.recepts = this.receptsServise.getRecepts();
  
}

 
}
