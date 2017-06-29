import { Meal } from './../shared/meal';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent {
  @Input() meal: Meal;
  private editable = false;

   constructor( ) {
     if(this.meal) console.log('Przywitano ' + this.meal.title);
   }

   edit(){
     this.editable = !this.editable;
   }

   clear(any: any){
     console.log({data: this.meal});
     this.meal = null;
   }
}
