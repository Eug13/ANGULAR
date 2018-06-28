import { Component,Input } from '@angular/core';
import {ReceptListComponent} from '../recept-list/recept-list.component'
@Component({
  selector: 'app-recept-detail',
  templateUrl: './recept-detail.component.html',
  styleUrls: ['./recept-detail.component.css']
})
export class ReceptDetailComponent {


  @Input() recept: object;

}
