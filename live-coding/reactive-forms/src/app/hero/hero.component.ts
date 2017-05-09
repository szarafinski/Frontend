import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroForm: FormGroup;
  color: AbstractControl;

  constructor(fb: FormBuilder) {
    this.heroForm = fb.group({
      name: ['', Validators.required],
      test: '',
      color: ['red', Validators.compose([
              Validators.required,
              Validators.minLength(5)]
      )]
    });

    this.color = this.heroForm.controls['color'];
  }



  ngOnInit() {
  }

}
