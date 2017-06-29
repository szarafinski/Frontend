import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/Filter';
import 'rxjs/add/operator/Map';

import { Meal } from './../shared/meal';
import { dataBase } from './../shared/mock-data';

@Injectable()
export class MealService {
  private delayMs = 500;

  getData(): Observable<Array<Meal>> {
    return of(dataBase).delay(this.delayMs);
  }

  delete(meal: Meal) {
    dataBase.splice(dataBase.indexOf(meal), 1);
  };

  add(meal: Meal) {
    dataBase.push(meal);
  }

  update(meal: Meal) {
    let oldMeal = dataBase.find(item => item.recipe_id === meal.recipe_id);
    let newMeal = Object.assign(oldMeal, meal);
    var index = dataBase.findIndex(item => item.recipe_id === meal.recipe_id);
    dataBase.splice(index, 1, newMeal);
  }

}



