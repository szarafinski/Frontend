import { ReactiveFormsModule } from '@angular/forms';
import { WikiService } from './wiki.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WikipediaComponent } from './wikipedia/wikipedia.component';
import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule
  ],
  exports: [WikipediaComponent],
  declarations: [WikipediaComponent],
  providers: [WikiService]
})
export class WikipediaModule { }
