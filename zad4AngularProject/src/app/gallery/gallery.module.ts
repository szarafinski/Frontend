import { MealService } from '../meals/services/meal.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [GalleryComponent],
  declarations: [GalleryComponent],
  providers: [MealService]
})
export class GalleryModule { }
