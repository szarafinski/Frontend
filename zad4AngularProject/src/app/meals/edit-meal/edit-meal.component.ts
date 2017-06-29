import { MealService } from './../services/meal.service';
import { Meal } from './../shared/meal';
import { Component, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'edit-meal',
  templateUrl: './edit-meal.component.html',
  styleUrls: ['./edit-meal.component.css'],
})
export class EditMealComponent {
  mealForm: FormGroup;
  @Output() selectedChange: EventEmitter<Meal> = new EventEmitter();
  @Input() meal: Meal;

  // form fields
  publisher: AbstractControl;
  title: AbstractControl;
  recipe_id: AbstractControl;
  image_url: AbstractControl;
  social_rank: AbstractControl;

  constructor(
    private fb: FormBuilder,
    private service: MealService
  ) {
    this.createForm();
  }

  createForm() {
    this.mealForm = this.fb.group({
      publisher: ['', Validators.required],
      title: ['', Validators.required],
      image_url: ['', Validators.required],
      social_rank: ['', Validators.required]
    });
    this.publisher = this.mealForm.controls['publisher'];
    this.title = this.mealForm.controls['title'];
    this.image_url = this.mealForm.controls['image_url'];
    this.social_rank = this.mealForm.controls['social_rank'];
  }

  ngOnChanges() {
    this.mealForm.reset({
      publisher: this.meal.publisher,
      title: this.meal.title,
      social_rank: this.meal.social_rank,
      image_url: this.meal.image_url
    });
  }

  onSubmit() {
    this.service.update(this.save());
  }

  revert() {
    this.ngOnChanges();
  }

  delete() {
    this.service.delete(this.meal);
    this.selectedChange.emit(null);
  }

  save() {
    const fromMealForm = this.mealForm.value;
    // return new `Meal` object containing a combination of original meal value(s)
    // and deep copies of changed form model values
    // not working if ngOnChanges is not working
    const savedMeal: Meal = {
      publisher: fromMealForm.publisher,
      f2f_url: this.meal.f2f_url,
      title: fromMealForm.title,
      source_url: this.meal.source_url,
      recipe_id: this.meal.recipe_id,
      image_url: fromMealForm.image_url,
      social_rank: fromMealForm.social_rank,
      publisher_url: this.meal.publisher_url
    };
    return savedMeal;
  }
}
