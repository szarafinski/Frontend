import { HeroServiceService } from './hero-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeroListComponent } from './hero-list/hero-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule 
  ],
  providers: [HeroServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
