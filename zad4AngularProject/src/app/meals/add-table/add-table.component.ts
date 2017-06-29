import { MealService } from './../services/meal.service';
import { Meal } from './../shared/meal';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'add-table',
  templateUrl: './add-table.component.html',
  styleUrls: ['./add-table.component.css']
})
export class AddTableComponent implements OnInit {
  mealForm: FormGroup;
  // form fields
  publisher: AbstractControl;
  title: AbstractControl;
  image_url: AbstractControl;
  social_rank: AbstractControl;
  f2f_url: AbstractControl;
  source_url: AbstractControl;
  publisher_url: AbstractControl;

  constructor(
    private fb: FormBuilder,
    private service: MealService
  ) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.mealForm = this.fb.group({
      publisher: ['', Validators.required],
      title: ['', Validators.required],
      image_url: ['', Validators.required],
      social_rank: ['', Validators.compose([Validators.required, this.ValueBetween])],
      f2f_url: ['', Validators.required],
      source_url: [''],
      publisher_url: ['', Validators.required],
    });
    this.publisher = this.mealForm.controls['publisher'];
    this.title = this.mealForm.controls['title'];
    this.image_url = this.mealForm.controls['image_url'];
    this.social_rank = this.mealForm.controls['social_rank'];
    this.f2f_url = this.mealForm.controls['f2f_url'];
    this.source_url = this.mealForm.controls['source_url'];
    this.publisher_url = this.mealForm.controls['publisher_url'];
  }

  ValueBetween(control: FormControl) {
    let gap: false;
    console.log({ data: control.value })
    if (+control.value > 100 || +control.value < 0)
      return { gap: true }
  }

  onSubmit() {
    this.service.add(this.save());
  }

  save(): Meal {
    const fromMealForm = this.mealForm.value;
    const savedMeal: Meal = {
      publisher: fromMealForm.publisher,
      f2f_url: fromMealForm.f2f_url,
      title: fromMealForm.title,
      source_url: fromMealForm.source_url,
      recipe_id: Math.floor(Math.random() * 10000).toString(),
      image_url: fromMealForm.image_url,
      social_rank: fromMealForm.social_rank,
      publisher_url: fromMealForm.publisher_url
    };
    return savedMeal;
  }

  get diagnostic() { return JSON.stringify(this.mealForm); }
}
