import { GalleryModule } from './gallery/gallery.module';
import { AuthService } from 'app/admin/services/authentication-service';
import { LoginComponent } from './admin/login/login.component';
import { AdminModule } from './admin/admin.module';
import { WikipediaModule } from './wikipedia/wikipedia.module';
import { AppRoutingModule } from './app-routing.module';
import { MealsModule } from './meals/meals.module';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MealsModule,
    WikipediaModule,
    AdminModule,
    GalleryModule,
    AppRoutingModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
