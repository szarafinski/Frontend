import { Component, OnInit , Input,Output, EventEmitter} from '@angular/core';
import { Data } from 'app/data';
@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  @Input()
  meal: Data
  
  constructor() { }

  ngOnInit() {
  }

}
