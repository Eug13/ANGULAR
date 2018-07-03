import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { ReceptsComponent } from './recepts/recepts.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ReceptListComponent } from './recepts/recept-list/recept-list.component';
import { ReceptDetailComponent } from './recepts/recept-detail/recept-detail.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ReceptEditComponent } from './recepts/recept-detail/recept-edit/recept-edit.component';
import { ReceptItemComponent } from './recepts/recept-list/recept-item/recept-item.component';
import { DropDirective } from './directives/drop.directive';
import { ReceptsService } from './recepts/recepts.service';

@NgModule({
  declarations: [
    AppComponent,
    ReceptsComponent,
    ShoppingListComponent,
    ReceptListComponent,
    ReceptDetailComponent,
    HeaderComponent,
    ShoppingEditComponent,
    ReceptEditComponent,
    ReceptItemComponent,
    DropDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ReceptsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
