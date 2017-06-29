import { MealService } from './../services/meal.service';
import { Meal } from './../shared/meal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  selectedMeal: Meal;
  dataSet: Array<Meal>;
  addMeal: Boolean;
  constructor(private mealService: MealService) { }

  ngOnInit() {
    this.getData();
    this.addMeal = false;
  }

  getData() {
    this.mealService.getData().subscribe(data => {
      this.dataSet = data;
    });
  }

  change(showAddMeal: Boolean){
    this.addMeal = showAddMeal;
  }


}
