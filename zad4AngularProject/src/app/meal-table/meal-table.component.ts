import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Data } from 'app/data';
@Component({
  selector: 'app-meal-table',
  templateUrl: './meal-table.component.html',
  styleUrls: ['./meal-table.component.css']
})
export class MealTableComponent implements OnInit {
  
  @Input() data: Array<Data>;
  @Input() selected: Data
  @Output() selectedChange: EventEmitter<Data> = new EventEmitter();
  constructor() {  }

  ngOnInit() {
  }

}
