import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms"
import { Routes, RouterModule } from '@angular/router';
import{DataService} from './data.service';
import {BrowserAnimationsModule}from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
 import { AboutComponent } from './about/about.component';


 const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about',      component: AboutComponent},
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home' }
  },
 
  { path: 'about', component:  AboutComponent },
  {
    path: 'about/:id',             // Add /:id here
    component: AboutComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,FormsModule
    ,BrowserAnimationsModule,
    
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
