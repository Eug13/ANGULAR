import { Component } from '@angular/core';
import {ReceptListComponent} from './recepts/recept-list/recept-list.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RecipeList';
}
