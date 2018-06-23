import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { CarsComponent } from './cars/cars.component';
import { ViewCarComponent } from './view-car/view-car.component';
import { InputCarComponent } from './input-car/input-car.component';
import { MotoComponent } from './moto/moto.component';
import { MotoInputComponent } from './moto-input/moto-input.component';
import { MotoViewComponent } from './moto-view/moto-view.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    CarsComponent,
    ViewCarComponent,
    InputCarComponent,
    MotoComponent,
    MotoInputComponent,
    MotoViewComponent
  
    // HeroFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent,CarsComponent, MotoComponent]
})
export class AppModule { }
