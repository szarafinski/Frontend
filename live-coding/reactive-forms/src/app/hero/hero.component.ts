import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup , AbstractControl  } from '@angular/forms';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
heroForm = new FormGroup ({
    name: new FormControl(),
    color: new FormControl(),
  });

  color =  this.heroForm.controls['color'];


  constructor() { }

  ngOnInit() {
  }

}
