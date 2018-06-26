import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReceptsComponent } from './recepts/recepts.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ReceptListComponent } from './recepts/recept-list/recept-list.component';
import { ReceptDetailComponent } from './recepts/recept-detail/recept-detail.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ReceptEditComponent } from './recepts/recept-detail/recept-edit/recept-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ReceptsComponent,
    ShoppingListComponent,
    ReceptListComponent,
    ReceptDetailComponent,
    HeaderComponent,
    ShoppingEditComponent,
    ReceptEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
