import { of } from 'rxjs/observable/of';
import { Meal } from './../shared/meal';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange, DoCheck, KeyValueDiffers } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/Finally';

import { PagerService } from './../services/page.service';
import { MealService } from './../services/meal.service';


@Component({
  selector: 'app-meal-table',
  templateUrl: './meal-table.component.html',
  styleUrls: ['./meal-table.component.css'],
  providers: [PagerService]
})
export class MealTableComponent implements OnInit, DoCheck {

  searchText: string = '';

  @Input() meals: Meal[];
  @Input() selected: Meal;
  @Output() selectedChange: EventEmitter<Meal> = new EventEmitter();
  @Output() PermisionToAddMeal: EventEmitter<Boolean> = new EventEmitter();

  pager: any = {};
  pagedItems = [];
  differ: any;

  constructor(
    private pageService: PagerService,
    private mealService: MealService,
    private differs: KeyValueDiffers) {
    this.meals = [];
    this.differ = differs.find({}).create(null);
  }

  ngOnInit() {
    this.setPager(1, '');
  }


  filter(searchString): Array<Meal> {
    this.searchText = searchString;
    if (searchString.length > 0) {
      return this.meals.filter(item => item.title.toLowerCase().indexOf(searchString.toLowerCase()) > -1);
    } else {
      return this.meals;
    }
  }

  setPager(page: number = 1, text: string = this.searchText): void {
    let meals = this.filter(text);
    // get pager object from service
    this.pager = this.pageService.getPager(meals.length, page);
    // get current page of items
    this.pagedItems = meals.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange }) {
    if (changes['meals']) {
      console.log('zmiana posilkow')  // nie dziala bo otrzymuje się observable,
      // ona nie zmienia sie w czasie, jako referencja jest taka sama
    }
    if (changes['selected']) {
      console.log('zmiana zaznaczonego') // zmienia sie referencja wiec i komunikat sie wyswietla
    }
  }

  ngDoCheck() { // uzywane do glebokiego przeszukiwania czy cos sie w ogole zmienilo, a nie w stosunku do poprzedniego
    let changes = this.differ.diff(this.meals); // sztucznie wygenerowana zmienna 
    if (changes) {
      console.log('changes detected');
      this.setPager(this.pager.currentPage, this.searchText);
      changes.forEachRemovedItem(r => {
        console.log("usunieto");
      });
    } else {
      console.log('nothing changed');
    }
  }

  addMeal() {
    this.selectedChange.emit(null);
    this.PermisionToAddMeal.emit(true);
  }


}
