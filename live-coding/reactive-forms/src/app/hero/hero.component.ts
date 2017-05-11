import { states } from './../data-model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroForm: FormGroup;
  // to make <div> work value of GroupForm must be declared as TypeScript value <- 1
  color: AbstractControl;

  states = states;
  constructor(private fb: FormBuilder) {
    this.heroForm = fb.group({
      //  GroupForm checks for valid input: name
      name: ['', Validators.required],
      // it is not nessesary to put validators
      // it's nessesary to put empty value into variable
      power: '',
      // to make <div> work value of GroupForm must be declared as TypeScript value <- 2
      color: ['red', Validators.compose([
        Validators.required,
        Validators.minLength(5)]
      )],
      address: this.fb.group({
        street: '',
        city: '',
        state: '',
        zip: '',
      }),
      sidekick: ''
    });
    // to make <div> work value of GroupForm must be declared as TypeScript value <- 3
    this.color = this.heroForm.controls['color'];
  }



  ngOnInit() {
  }

}