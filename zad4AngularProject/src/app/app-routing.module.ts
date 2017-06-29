import { GalleryComponent } from './gallery/gallery/gallery.component';
import { LoginComponent } from './admin/login/login.component';
import { WikipediaComponent } from './wikipedia/wikipedia/wikipedia.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainComponent } from './meals/main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const appRoutes: Routes = [
    { path: 'meals', component: MainComponent },
    { path: 'project', component: AppComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    { path: 'wiki', component: WikipediaComponent },
    { path: 'login', component: LoginComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }