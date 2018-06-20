import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import {FormsModule} from '@angular/forms';
import { CatsComponent } from './cats/cats.component';
import { HeroFormComponent } from './hero-form/hero-form.component';

@NgModule({
  declarations: [
    AppComponent,
    // PersonComponent,
    CatsComponent,
    HeroFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,CatsComponent]
})
export class AppModule { }
