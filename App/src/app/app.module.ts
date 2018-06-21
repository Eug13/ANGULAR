import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import {FormsModule} from '@angular/forms';
import { CatsComponent } from './cats/cats.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { CarsComponent } from './cars/cars.component';
import { ViewCarComponent } from './view-car/view-car.component';
import { InputCarComponent } from './input-car/input-car.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    CarsComponent,
    ViewCarComponent,
    InputCarComponent
    // PersonComponent,
    // CatsComponent,
    // HeroFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent,CarsComponent]
})
export class AppModule { }
