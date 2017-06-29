import { MealService } from './services/meal.service';
import { EditMealComponent } from './edit-meal/edit-meal.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import { MealComponent } from './meal/meal.component';
import { MealTableComponent } from './meal-table/meal-table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { AddTableComponent } from './add-table/add-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [MainComponent],
  declarations: [
    MealTableComponent,
    MealComponent,
    SearchFieldComponent,
    EditMealComponent,
    MainComponent,
    AddTableComponent,
  ],
  providers: [MealService],
})
export class MealsModule { }
