import { Component } from '@angular/core';
import { HeroComponent }    from '../hero/hero.component';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new HeroComponent(18, 'Evgeniy', this.powers[0], 'FrontEnder');

  heros = [];

  submitted = false;

  onSubmit(e) { 
   const HERO = {
     name:this.model.name,
     alterEgo:this.model.alterEgo,
     power:this.model.power   
   }  

  this.submitted = true; 
  this.heros.push(HERO)
  console.log(this.heros);
  }

  newHero() {
     this.model = new HeroComponent(42, '', '');
  }
}