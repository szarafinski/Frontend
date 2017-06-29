import { Meal } from './../../meals/shared/meal';
import { Observable } from 'rxjs/Observable';
import { MealService } from './../../meals/services/meal.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  dataSet: Observable< Meal[]>;
  constructor(private service: MealService) { }

  ngOnInit() {
     this.dataSet = this.service.getData(); 
     console.log({data: this.dataSet})
  }

}
