import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { courseReducer } from './redux/reducers';
import { CoursesComponent } from './components/courses/courses.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HomeComponent } from './components/home/home.component';
import { CourseComponent } from './components/course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    HomeComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //the store has a branch called courses and the reducer associated is courseReducer
    StoreModule.forRoot({courses:courseReducer}),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
